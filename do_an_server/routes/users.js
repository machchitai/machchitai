var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  var data = {
    data: "data"
  };
  res.json(data);

  //var a = 10 + 1;
  //res.send('respond with a resource ' + a);

});

router.post('/', function(req, res, next) {
  res.json({
    'xu_ly':'import users'
  });
});

router.put('/', function(req, res, next) {
  res.json({
    'xu_ly':'create or update users'
  });
});


router.delete('/', function(req, res, next) {
  res.json({
    'xu_ly':'delete users'
  });
});


module.exports = router;
