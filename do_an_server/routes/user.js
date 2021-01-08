var express = require('express');
var router = express.Router();
var fs = require('fs');
var authenticate = require('../middleware/auth');

const MongoClient = require('mongodb').MongoClient;

//--Connection URL
const url = 'mongodb://localhost:27017';

//--Database Name
const dbName = 'project';

//--function for logging
var complete_log = (req, res, next) => {
  try {
      var string_log = '-200-'+JSON.stringify({
          'thong_bao':' them user moi',
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

// //--function for checking authentication
// var authentication = (req, res, next) => {

//     //--get Authentication Key
//     var authorization = req.header('Authorization');
//     var array_auth = authorization.split(' ');
//     //console.log(array_auth[1]);

//     //--decode Authorization key into String
//     var string_basic_auth = array_auth[1];
//     var data_string_auth = (new Buffer(string_basic_auth, 'base64')).toString();
//     //console.log(data_string_auth);    
    
//     var user_info = data_string_auth.split(':');
//     if(user_info[0] == 'username' && user_info[1] == 'password'){
//       console.log(user_info);
//       next();
//     }
//     else {
//       res.status(401);
//       res.json({
//         'error':true,
//         'error_mess': 'You dont\'t have permission'
//       });
//     }
   
// }

//--router for POST request to check authentication and write in log
router.post('/', complete_log, (req, res) =>{
  res.json({
    'thong_bao':' them user moi',
    data_send: req.body    
  });
});

//--router for POST request to  signup new user
router.post('/sign-up', function(req, res) {

  MongoClient.connect(url, function(err, client) {
          
    if(err){
      console.log(err);
    }
    else
    {
      console.log("Connected successfully to server");
    }

    const db = client.db(dbName);
    
    //--Get the documents collection
    const collection_user = db.collection('users');
    //console.log(collection_user);
    //--Insert one document
    collection_user.insertOne(req.body,() => {     
           
        res.json({
            'thong_bao':'dang ky user moi thanh cong!',
            data_send: req.body
        });                       

    });

  });   
  
});


 router.get('/:username', (req, res) => {
  
      //--Use connect method to connect to the server
      MongoClient.connect(url, function(err, client) {
          
        if(err){
          console.log(err);
        }
        else
        {
          console.log("Connected successfully to server");
        }        
        const db = client.db(dbName);

        //--Get the documents collection
        const collection_user = db.collection('users');

        //--Find some documents
        collection_user.findOne({'username':req.params.username},function(err, info_user) {          
            
            res.json({
              'thong_bao':' show thong tin user ' + req.params.username,
              'data': info_user
            });           
          

        });

      });   
  
 });

 router.put('/:email', (req, res)=> {

    //console.log (req.params.email);
     //--Use connect method to connect to the server
     MongoClient.connect(url, function(err, client) {
          
      if(err){
        console.log(err);
      }
      else
      {
        console.log("Connected successfully to server");
      }   
      const db = client.db(dbName);
      //--Get the documents collection
      const collection_user = db.collection('users');
      
      //--Update documents
      collection_user.updateOne({email:req.params.email}, { $set: req.body }, () => {
        
        res.json({
          'thong_bao':' update thong tin user ' + req.params.email + ' thanh cong!',
          data_send: req.body
        });                      
      });

    });   
 });

 router.delete('/:email', authenticate.auth, (req, res) => {
  MongoClient.connect(url, function(err, client) {
          
    if(err){
      console.log(err);
    }
    else
    {
      console.log("Connected successfully to server");
    }

    const db = client.db(dbName);
    console.log(db);
    //--Get the documents collection
    const collection_user = db.collection('users');
    console.log(collection_user);

    //--Insert one document
    collection_user.deleteOne({email:req.params.email},() => {     
           
        res.json({
            'thong_bao':'xoa user thanh cong!',
            data_send: req.body
        });                       

    });

  });   
  
 });

 router.post('/log-in', (req, res) => {
  console.log(req.body);
  MongoClient.connect(url, function(err, client) {
      if(err)
          console.log(err);
      const db = client.db(dbName);
      const collection_user = db.collection('users');
      collection_user.findOne({tai_khoan: req.body.tai_khoan}, (err, result) => {
          if(err)
              console.log(err);

          if(typeof result != 'undefined' && result != null){
              if(result.mat_khau == req.body.mat_khau){
                  //res.status(401);
                  result.mat_khau = null;
                  res.json({
                      'xu_ly': 'đăng nhập thành công',
                      data_send: result
                  });
              }
              else{
                  res.status(401);
                  res.json({
                      'xu_ly': 'xử lý đăng nhập thất bại, sai tài khoản hoặc mật khẩu',
                      error: true
                  });
              }
          }
          else{
              res.status(401);
              res.json({
                  'xu_ly': 'xử lý đăng nhập thất bại, sai tài khoản hoặc mật khẩu',
                  error: true
              });
          }
      });
      
  });
})

module.exports = router;
