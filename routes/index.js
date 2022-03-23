const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
  // 渲染名称为 index.hbs 的模板
  res.render('index');
})

router.get('/contact',(req,res) => {
  // 渲染名称为 contact.hbs 的模板
  res.render('contact');
})

module.exports = router;