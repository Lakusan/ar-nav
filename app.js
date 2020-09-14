const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const expressSession= require('express-session');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import Routes
const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');

//Environment variables
dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, 
{ useUnifiedTopology: true ,
  useNewUrlParser: true},
() => console.log('connected to db!'));

const app = express();

//middleware
// view engine
app.engine('handlebars', handlebars({extname: 'handlebars', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.use(logger('dev'));
//app.use(bodyParser.json());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
//app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(expressSession({secret: 'max', saveUninitialized: false, resave: false}));
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', indexRouter);
app.use('/register', registerRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
