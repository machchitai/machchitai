var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
  
//     res.json({
//         'don_hang':' show tat ca don hang'
//       });
  
// });

router.get('/:id_don_hang', function(req, res, next) {
  
    res.json({
        'id_don_hang': req.params.id_don_hang,
        'id_sach': '',
        'so_luong': '',
        'don_gia':'',
        'thang_tien':''
      });
  
});

router.post('/:id_don_hang', function(req, res, next) {
  
    res.json({
        'id_don_hang': req.params.id_don_hang,
        'id_sach': '',
        'so_luong': '',
        'don_gia':'',
        'thang_tien':''
      });
  
});

module.exports = router;