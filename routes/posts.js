const express = require('express');
const User = require('../model/User');
const router = express.Router();
const verify = require('./verifyToken');

//verify makes Route private and not accessable if u are not loged in
// DER SHIT FÜR  MAIN NEHMEN
router.get('/', verify, (req, res) => {
    //res.send(req.user);
    res.json({posts: {title: 'my first post'}});
});


module.exports = router;