var express = require('express');
var index_controller = require('../controllers/signupController.js');
var router = express.Router();

/* GET home page. */

router.get('/',  index_controller.index);
router.get('/*', function(req, res, next) {
  res.redirect('/Signup');
  }); 
module.exports = router;
