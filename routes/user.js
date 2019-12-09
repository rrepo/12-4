'use strict';
const express = require('express');
const router = express.Router();
const User = require('../models/user');

var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://postgres:postgres@host:port/s')

var emailcheck = 'select *from users order by email';
//ただの数字としてしか認識されてない
//dbを参照した変数を作りたい

router.get('/', function(req, res, next) {
  //このパスがよくわからない
  res.render('user', {
    title: '新規会員登録'
  });
});

router.post('/', function(req, res, next) {

  const createdAt = new Date();
  console.log(emailcheck);

    User.create({
      user_name : req.body.name,
      email : req.body.email,   
      password : req.body.password,
      created_at :createdAt
      
    }).then((user) => {
      user_name : req.body.name
      email :req.body.email
      password : req.body.password
    });
    console.log('あいうえお');
    res.redirect('http://localhost:8000/');

  if(req.body.email == null){
    //機能してない、検索部分にreq.body.emailを変数として入れ、ヒットしたら保存できないようにする

    // User.create({
    //   user_name : req.body.name,
    //   email : req.body.email,   
    //   password : req.body.password,
    //   created_at :createdAt
      
    // }).then((user) => {
    //   user_name : req.body.name
    //   email :req.body.email
    //   password : req.body.password
    // });
    // console.log('あいうえお');
    // res.redirect('https://www.google.com/');
    
  }else{
    //res.redirect('https://www.timer.onl.jp/');
  }

});

module.exports = router;