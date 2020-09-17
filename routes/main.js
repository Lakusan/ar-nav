const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');
const User = require('../model/User');


/* GET home page. */
router.get('/',   (req, res,next) => {
  res.render('main', { title: 'Main'});
});



module.exports = router;
