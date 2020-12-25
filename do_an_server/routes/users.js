var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

//--Connection URL
const url = 'mongodb://localhost:27017';

//--Database Name
const dbName = 'project';

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  // var data = {
  //   data: "data"
  // };
  // res.json(data);

  //var a = 10 + 1;
  //res.send('respond with a resource ' + a);

  // res.json({
  //   " data": "list users" +  JSON.stringify(req.query)
  // });

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
    const collection_user = db.collection('user');

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

router.post('/', function(req, res, next) {
  res.json({
    'xu_ly':'import users'
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
