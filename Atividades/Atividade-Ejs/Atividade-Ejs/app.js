var createError = require('http-errors');
var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var dataRouter = require('./routes/data');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/data', dataRouter);
app.use('/about', aboutRouter);
app.use(function(req, res, next) {
  res.status(404).send('<h1 style="font-size:200px;">ERROR page not found!</h1> <h2 style="font-size:100px;">link: http://localhost:3000/</h2>');
  next(createError(404));
})
module.exports = app;

