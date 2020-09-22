const express = require('express');
const router = express.Router();

router.get('/',  (req, res,next) => {
  res.render('guest', { title: 'Guest'});
});

module.exports = router;