const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

//Register User 
router.post('/register',urlencodedParser, async (req, res) => {

  //Validate Input
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user is already in registered
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email already exists');

  const nameExist = await User.findOne({ name: req.body.name });
  if (nameExist) return res.status(400).send('Username already taken');

  //password hashes
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //Create New User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword
  })
  try {
    const savedUser = await user.save();
    // res.send({ user: user._id });
    res.redirect('/auth/login');
  } catch (err) {
    res.status(400).send(err);
  }
});

//Login 
router.post('/login', urlencodedParser, async (req, res) => {
 
  //Validate Input
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if email exits
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid E-Mail');

  //Password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass) return res.status(400).send('Invalid Password')

  //create and assign a token to response header
  const expiration = process.env.COOKIE_LIFETIME;
  const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
  
  res.header('uid', user._id);
  res.cookie('token', token, {
  expires: new Date(Date.now() + expiration),
  secure: false, //HTTPS else false
  httpOnly: false
  });
  const test = req.body.userId;  
  res.send(test);
  //res.send(req.headers.uid);
  //res.redirect('/main');
  
});



router.get('/login',  (req, res,next) => {
  res.render('login', { title: 'Login'});
});

router.get('/register',  (req, res,next) => {
  res.render('register', { title: 'Register'});
});

module.exports = router;
