var express = require('express');
var router = express.Router();
var home = require('../controllers/homeController');

/* GET home page. */
router.get('/',home.index); 

router.get('/home/*', function(req, res, next) {
 res.redirect('/home');
});

module.exports = router;
