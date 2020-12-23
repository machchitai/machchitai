var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  
    res.json({
        'loai_sach':' show loai sach'
      });
  
});



router.get('/:id_loai_sach', function(req, res, next) {
  
    res.json({
        'id_loai_sach': req.params.id_loai_sach,
        'ten_loai_sach': '',
        'id_loai_cha': '',
        'sap_xep': '',
        'trang_thai':''
      });
  
});


router.post('/:id_loai_sach', function(req, res, next) {
  
    res.json({
        'id_loai_sach': req.params.id_loai_sach,
        'ten_loai_sach': '',
        'id_loai_cha': '',
        'sap_xep': '',
        'trang_thai':''
      });
  
});

module.exports = router;