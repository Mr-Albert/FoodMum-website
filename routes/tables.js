var express = require('express');
var router = express.Router();
var tables = require('../controllers/tablesController');

/* GET home page. */
router.get('/',tables.index); 

router.get('/*', function(req, res, next) {
 res.redirect('/tables');
});

module.exports = router;
