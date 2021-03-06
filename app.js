var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var expressValidator = require('express-validator')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var multer = require('multer');
var flash = require('connect-flash');
var routes = require('./routes/index');
var events = require('./routes/events');
var admins = require('./routes/admins');
var clientSession = require('client-sessions');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(clientSession({
  cookieName: 'session',
  secret: 'hdye*($&$&*fbj3438]23467',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  httpOnly: true,
  secure: true,
  ephemeral: true
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//Handle Express Session
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true
}));
//validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));
app.use(express.static(path.join(__dirname, 'public')));
//Connect Flash
app.use(session());
app.use(flash());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  res.locals.session = req.session.user;
  next();
});
app.use(function(req, res, next){
    res.locals.success = req.flash('success');
    res.locals.errors = req.flash('error');
    next();
});




app.use('/', routes);
app.use('/events',events);
app.use('/admins',admins);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
