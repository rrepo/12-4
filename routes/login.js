'use strict';
const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.get('/', function(req, res, next) {
  res.render('login', {
    title: 'ログイン'
  });
});

router.post('/', function(req, res, next) {
  req.body.email
  req.body.password
});

module.exports = router;