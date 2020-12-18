var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  
    res.json({
        'xu_ly':' show information user'
      });
  
});

router.get('/:id_user', function(req, res, next) {
  
    res.json({
        'xu_ly':'show information user ' + req.params.id_user
      });
  
});

router.post('/:id_user', function(req, res, next) {
  
    res.json({
        'id': req.params.id_user,
        data: req.body
      });
  
});

module.exports = router;
