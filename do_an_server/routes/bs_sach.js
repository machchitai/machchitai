var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  
    res.json({
        'sach':' show tat ca sach'
      });
  
});

router.get('/:id_sach', function(req, res, next) {
  
    res.json({
        'id_sach': req.params.id_sach,
        'ten_sach': '',
        'id_tac_gia': '',
        'gioi_thieu': '',
        'doc_thu':'',
        'id_loai_sach':'',
        'id_nha_xuat_ban':'',
        'so_trang':'',
        'ngay_xuat_ban':'',
        'kich_thuoc':'',
        'sku':'',
        'trong_luong':'',
        'hinh':'',
        'don_gia':'',
        'gia_bia':'',
        'noi_bat':''
      });
  
});

router.post('/:id_sach', function(req, res, next) {
  
    res.json({
        'id_sach': req.params.id_sach,
        'ten_sach': '',
        'id_tac_gia': '',
        'gioi_thieu': '',
        'doc_thu':'',
        'id_loai_sach':'',
        'id_nha_xuat_ban':'',
        'so_trang':'',
        'ngay_xuat_ban':'',
        'kich_thuoc':'',
        'sku':'',
        'trong_luong':'',
        'hinh':'',
        'don_gia':'',
        'gia_bia':'',
        'noi_bat':''
      });
  
});


module.exports = router;