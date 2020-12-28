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

    //--Insert one document
    collection_user.insertOne(req.body,function(err, data) {
      
      if(err){
        console.log(err);
      }
      else {      
        res.json({
            'thong_bao':'dang ky user moi thanh cong!',
            data_send: data
        });                  
        client.close();
      }

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
          if(err){
            console.log(err);
          }
          else {   
            res.json({
              'thong_bao':' show thong tin user ' + req.params.username,
              'data': info_user
            });                      
            client.close();
          }

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
        client.close();
      });

    });   
 });

 router.delete('/:email', authenticate.auth, (req, res) => {
    console.log(req.params.email);
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
      
      //--Delete documents
      collection_user.deleteOne({email:req.params.email}, () => {
        
        res.json({
          'thong_bao':' xoa user ' + req.params.email + ' thanh cong!',
          
        });                      
        client.close();
      });

    });   
 });

module.exports = router;
