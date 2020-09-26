const express = require('express');
const router = express.Router();

router.get('/',  (req, res) => {
  res.render('guest', { title: 'Guest'});
});

module.exports = router;