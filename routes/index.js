'use strict';
const express = require('express');
const router = express.Router();
const user = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); 

  var userdate = user.findAll({where:{user_id : 1},order: [['"created_at"', 'DESC']]});
  console.log(userdate);

  user.findAll({
    where:{user_id : 1},
    order: [['"created_at"', 'DESC']]
  }).then((user) => {
    res.render('user', {
      id :user_id,
      user_name : user_name,
    });
  });

});

module.exports = router;
