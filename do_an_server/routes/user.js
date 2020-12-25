var express = require('express');
var router = express.Router();
var fs = require('fs');

const MongoClient = require('mongodb').MongoClient;

//--Connection URL
const url = 'mongodb://localhost:27017';

//--Database Name
const dbName = 'project';

//--function for logging
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

//--function for checking authentication
var authentication = (req, res, next) => {

    //--get Authentication Key
    var authorization = req.header('Authorization');
    var array_auth = authorization.split(' ');
    //console.log(array_auth[1]);

    //--decode Authorization key into String
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



//--router for POST request to check authentication and write in log
router.post('/', authentication, complete_log, (req, res) =>{
 
  res.json({
    'add':' them user moi',
    data_send: req.body    
  });

});

//--router for POST request to  signup 
router.post('/sign-up', function(req, res) {
  res.json({
    'signup':' dang ky user moi',
    data_send: req.body    
  });
});


 router.get('/:email_user', (req, res) => {
  
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
        collection_user.findOne({'email':req.params.email_user},function(err, info_user) {
          
          if(err){
            console.log(err);
          }

          else {      

            res.json({
              'xuly':' show thong tin user ' + req.params.email_user,
              'data': info_user
            });
                      
            client.close();
          }

        });

      });   
  
 });

module.exports = router;
