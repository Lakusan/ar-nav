const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');


router.get('/',  verify,  (req, res) => {

  res.render('main', { title: 'Main'});
});

module.exports = router;
