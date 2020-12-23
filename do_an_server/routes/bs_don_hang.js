var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  
    res.json({
        'don_hang':' show tat ca don_hang'
      });
  
});

router.get('/:id_don_hang', function(req, res, next) {
  
    res.json({
        'id': req.params.id_don_hang,
        'ma_don_hang': '',
        'tong_tien': '',
        'ngay_dat':'',
        'id_nguoi_dung':'',
        'ho_ten_nguoi_nhan':'',
        'email_nguoi_nhan':'',
        'so_dien_thoai_nguoi_nhan':'',
        'trang_thai':'',
        'dia_chi_nguoi_nhan':'',
      });
  
});

router.post('/:id_don_hang', function(req, res, next) {
  
    res.json({
        'id': req.params.id_don_hang,
        'ma_don_hang': '',
        'tong_tien': '',
        'ngay_dat':'',
        'id_nguoi_dung':'',
        'ho_ten_nguoi_nhan':'',
        'email_nguoi_nhan':'',
        'so_dien_thoai_nguoi_nhan':'',
        'trang_thai':'',
        'dia_chi_nguoi_nhan':'',
      });
  
});


module.exports = router;