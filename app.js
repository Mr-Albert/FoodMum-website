var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var fs = require('fs');
//var lessMiddleware = require('less-middleware');
var home = require('./routes/home');
var login = require('./routes/login');
var signup = require('./routes/signup');
var users = require('./routes/users');
var account = require('./routes/account');
var tables = require('./routes/tables');
var authorizeController = require('./controllers/authorizeController');
var CircularJSON = require('circular-json');
var app = express();
//morgan custom logging
app.use(logger(function (tokens, req, res) {
  fs.appendFile('requestslogs.txt',"\""+tokens.url(req, res)+"\" :\n"+  CircularJSON.stringify(req)+" ,\n ", function (err) {
    if (err) throw err;
   }); 
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'].join(' ');
  }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(lessMiddleware(path.join(__dirname, 'public')));
//express session
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
//use passport  to authenticate logging in
app.post('/login', passport.authenticate('local', {
  successRedirect : '/account', // redirect to the secure profile section
  failureRedirect : '/login'}));
app.use('/', isAuthenticated,home);
app.use('/home',  isAuthenticated,home);
app.use('/users', isAuthenticated,users);
app.use('/login',isAuthenticated, login);
app.use('/account', isAuthenticated,account);
app.use('/tables', isAuthenticated,tables); 
passport.use('local',
 new LocalStrategy({

  usernameField: 'username',

  passwordField: 'password',

  } ,
 function ( username, password, done){
   var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';
   return done(null,  { firstName: 'Foo', lastName: 'Bar' });
    }));







function isAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');

}
passport.serializeUser(function(user, done){
  done(null, user.firstName);

});
passport.deserializeUser(function(id, done){ 
    done(null,  { firstName: 'Foo', lastName: 'Bar' });});
 





/*
app.use('/*',  function(req, res, next) {
  res.redirect('/');
  });*/


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');});

module.exports = app;
