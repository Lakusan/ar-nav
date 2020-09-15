const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation');

//Register User 
router.post('/register', async (req, res) => {

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
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//Login 
router.post('/login', async (req, res) => {

  //Validate Input
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if email exits
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid EMail');

  //Password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass) return res.status(400).send('Invalid Password')

  //create and assign a token
  const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);

});

module.exports = router;
