var express = require('express');
var router = express.Router();
var authenticate = require('../middleware/auth');

const MongoClient = require('mongodb').MongoClient;

//--Connection URL
const url = 'mongodb://localhost:27017';

//--Database Name
const dbName = 'project';

//-- GET users listing. 
router.get('/', function(req, res, next) {  
  
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
    collection_user.find({}).toArray(function(err, ds_user) {      
      if(err){
        console.log(err);
      }
      else {      
        res.json({
          'xuly':' show thong tin tat ca user',
          'data': ds_user
        });                  
        client.close();
      }
    });
  
  });   

});

//-- import many users
router.post('/', authenticate.auth, (req, res, next) => {

  //--Connect to server
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
    collection_user.insertMany([req.body],function(err, data) {      
      if(err){
        console.log(err);
      }
      else {      
        res.json({
            'thong_bao':'them nhieu user thanh cong!',
            data_send: data
        });                  
        client.close();
      }
    });
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
