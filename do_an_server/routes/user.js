var express = require('express');
var router = express.Router();
var fs = require('fs');


//function for logging
var complete_log = (req, res, next) => {
  try {
      var string_log = '-200-'+JSON.stringify({
          'add':' them user moi',
          data_send: req.body    
        }) + '\n';
      fs.appendFileSync('./data_log/2020_12_23.log',string_log);
    }
    catch(err){
      var string_log = '-500-Server Internal Error' + '\n';
      fs.appendFileSync('./data_log/2020_12_23.log',string_log);
    }
  next();
}

// function for checking authentication
var authentication = (req, res, next) => {

    // get Authentication Key
    var authorization = req.header('Authorization');
    var array_auth = authorization.split(' ');
    //console.log(array_auth[1]);

    // decode Authorization key into String
    var string_basic_auth = array_auth[1];
    var data_string_auth = (new Buffer(string_basic_auth, 'base64')).toString();
    //console.log(data_string_auth);    
    
    var user_info = data_string_auth.split(':');
    if(user_info[0] == 'username' && user_info[1] == 'password'){
      console.log(user_info);
      next();
    }
    else {
      res.status(401);
      res.json({
        'error':true,
        'error_mess': 'You dont\'t have permission'
      });
    }
   
}

router.get('/', function(req, res, next) {
  
    res.json({
        'user':' show thong tin user',
        data_send: req.body
      });
  
});

// router for post request to check authentication and write in log
router.post('/', authentication, complete_log, (req, res) =>{
 
  res.json({
    'add':' them user moi',
    data_send: req.body    
  });
});


router.post('/sign-up', function(req, res) {
  res.json({
    'signup':' dang ky user moi',
    data_send: req.body    
  });
});


// router.get('/:id_nguoi_dung', function(req, res, next) {
  
//     res.json({
//         'id': req.params.id_nguoi_dung,
//         'tai_khoan':'',
//         'mat_khau':'',
//         'id_loai_user':'',
//         'id_phan_quyen':'',
//         'ho_ten':'',
//         'email':'',
//         'ngay_sinh':'',
//         'dia_chi':'',
//         'diem_tich_luy':'',
//         'ngay_dang_ky':'',
//         'avatar':'',
//         'dien_thoai':'',
//         data_send: req.body
//       });
  
// });

// router.post('/:id_nguoi_dung', function(req, res, next) {
  
//     res.json({
//       'id': req.params.id_nguoi_dung,
//       'tai_khoan':'',
//       'mat_khau':'',
//       'id_loai_user':'',
//       'id_phan_quyen':'',
//       'ho_ten':'',
//       'email':'',
//       'ngay_sinh':'',
//       'dia_chi':'',
//       'diem_tich_luy':'',
//       'ngay_dang_ky':'',
//       'avatar':'',
//       'dien_thoai':'',
//       data_send: req.body
//       });
  
// });

module.exports = router;
