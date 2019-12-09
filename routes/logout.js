'use strict';
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', function(req, res, next) {
    req.session.destroy();
    res.redirect('/login');
  });

module.exports = router;