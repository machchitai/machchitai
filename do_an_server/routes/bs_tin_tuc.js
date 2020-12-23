var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  
    res.json({
        'tin_tuc':' show tat ca tin tuc'
      });
  
});

router.get('/:tieu_de_tin', function(req, res, next) {
  
    res.json({
        'id':'',
        'tieu_de_tin': req.params.tieu_de_tin,
        'noi_dung_tom_tat': '',
        'noi_dung_chi_tiet': '',
        'trang_thai':'',
        'hinh_dai_dien':'',
        'id_loai_tin_tuc':'',
        'ngay_dang':''
       
      });
  
});

router.post('/:tieu_de_tin', function(req, res, next) {
  
    res.json({
        'id':'',
        'tieu_de_tin': req.params.tieu_de_tin,
        'noi_dung_tom_tat': '',
        'noi_dung_chi_tiet': '',
        'trang_thai':'',
        'hinh_dai_dien':'',
        'id_loai_tin_tuc':'',
        'ngay_dang':''
      });
  
});


module.exports = router;