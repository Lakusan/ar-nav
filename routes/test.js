const express = require('express');
const router = express.Router();

router.get('/',  (req, res) => {
    res.render('ar', { title: 'AR.JS-TEST', layout: 'ar-layout.hbs'});
});

module.exports = router;