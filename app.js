const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//ROUTER
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const commentsRouter = require('./routes/comments');
const mainRouter = require('./routes/main');
const guestRouter = require('./routes/guest');
const testRouter = require('./routes/test');
const locationsRouter = require('./routes/locations');

//ENV
dotenv.config();

//DATABASE
mongoose.connect(process.env.DB_CONNECT, 
{ useUnifiedTopology: true ,
  useNewUrlParser: true},
() => console.log('connected to db!'));

const app = express();

//MIDDLEWARE
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/comments', commentsRouter);
app.use('/main', mainRouter);
app.use('/guest', guestRouter);
app.use('/test', testRouter);
app.use('/locations', locationsRouter);

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
