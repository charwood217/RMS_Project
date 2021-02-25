var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/home', (req,res) => {
  res.render('home');
});
app.get('/incident', (req,res) => {
  res.render('incident');
});
app.get('/person', (req,res) =>{
  res.render('person');
});
app.get('/vehicle', (req,res) => {
  res.render('vehicle');
});
app.get('/vehicle/report', (req,res) => {
  res.render('vehicleReport');
});
app.get('/incident/report', (req,res) =>{
  res.render('incidentReport');
});
app.get('/person/report', (req,res) => {
  res.render('personReport');
});
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
