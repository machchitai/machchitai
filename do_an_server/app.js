var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userRouter = require('./routes/user');
var bs_loai_sachRouter = require('./routes/bs_loai_sach');
var bs_sachRouter = require('./routes/bs_sach');
var bs_tin_tucRouter = require('./routes/bs_tin_tuc');
var bs_chi_tiet_don_hangRouter = require('./routes/bs_chi_tiet_don_hang');
var bs_don_hangRouter = require('./routes/bs_don_hang');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// execute logging
app.use((req,res,next) => {
  var string_log = Date.now()+'-'+req.method+'-'+req.url+'\n';
  fs.appendFileSync('./data_log/2020_12_23.log',string_log);
  next();
});

// routing
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user', userRouter);
app.use('/loai-sach', bs_loai_sachRouter);
app.use('/sach', bs_sachRouter);
app.use('/chi-tiet-don-hang', bs_chi_tiet_don_hangRouter);
app.use('/tin-tuc', bs_tin_tucRouter);
app.use('/don-hang', bs_don_hangRouter);

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
  res.send('Server Error!');
  //res.render('error');
});

module.exports = app;
