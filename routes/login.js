var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');
const passport = require('passport')


/* GET home page. */
router.get('/',loginController.index); 
router.post('/', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/login'
}) ); 
router.get('/*', function(req, res, next) {
  res.redirect('/login');
  }); 
module.exports = router;
