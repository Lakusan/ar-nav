const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'AR-NAV', message: '' , success: 'false', errors: req.session.errors});
  req.session.errors = null;
});


module.exports = router;
