const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',  (req, res,next) => {
  res.render('guest', { title: 'Guest'});
});



module.exports = router;