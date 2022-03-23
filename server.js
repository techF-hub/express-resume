const express = require('express');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const hostname = 'localhost';
const port = '8080';

const app = express();

function loggingMiddleware(req, res, next) {
  const time = new Date();
  console.log(`[${time.toLocaleString()}] ${req.method} ${req.url}`);
  next();
}

app.use(loggingMiddleware); // 全局中间件，且要放在路由前面

// 指定模板存放目录
app.set('views', 'views');

// 指定模板引擎为 Handlebars
app.set('view engine', 'hbs');

// 静态资源
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// 处理404
app.use('*', (req, res) => {
  res.status(404).render('404', { url: req.originalUrl });
});

// 处理服务器错误
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error');
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})