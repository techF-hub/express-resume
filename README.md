# 利用Express建立个人简历（入门级）

*参考：https://juejin.cn/post/6844904023380721678*

**个人学习node+express**

---
nodemon 加速开发
npm install nodemon --save-dev

---
app.use() 为全局中间件
路由中间件：
app.get('/middleware', someMiddleware, (req, res) => {
  res.send('Hello World');
});

---
使用 Handlebars 作为模板引擎
静态文件服务: Express 已经自带了静态文件服务中间件 express.static

---
res.json写接口数据

---
const router = express.Router();拆分路由