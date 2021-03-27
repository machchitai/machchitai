var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  throw new Error('error');
  // res.render('index', { title: 'Express' });
});

module.exports = router;

