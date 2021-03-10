var express = require('express');
var router = express.Router();
var fs = require('fs');
var authenticate = require('../middleware/auth');
var md5 = require('md5');
var base64 = require('base-64');
var router = express.Router();
var mysql = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'shop_ban_hang'
});

const { v4: uuidv4 } = require('uuid');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const { UpgradeRequired } = require('http-errors');
// Connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'shop_online';

router.get('/', (req, res) => {
    MongoClient.connect(url, function(err, client) {
        if(err)
            console.log(err);

        const db = client.db(dbName);

        const collection_user = db.collection('users');

        collection_user.find({}).toArray(function(err, ds_user) {
            if(err)
                console.log(err);

            //console.log(ds_user);

            res.json({'xu_ly': 'thông tin user', 'data': ds_user});
            
            client.close();
        });
    });
});

router.get('/:id_user', (req, res) => {

    MongoClient.connect(url, function(err, client) {
        if(err)
            console.log(err);
        const db = client.db(dbName);
        const collection_user = db.collection('users');
        //collection_user.findOne({'email': req.params.id_user},function(err, info_user) {
        collection_user.findOne({'_id': ObjectID(req.params.id_user)},function(err, info_user) {
            if(err)
                console.log(err);
            //console.log(ds_user);
            res.json({'xu_ly': 'thông tin user', 'data': info_user});
            client.close();
        });
    });
    //res.json({'xu_ly': 'thông tin user ' + req.params.id_user});
});

router.post('/', authenticate.auth, (req, res) => {
    //console.log(hahaha.length);
    res.json({
        'xu_ly': 'thêm user mới',
        data_send: req.body
    });
});

router.post('/sign-up', (req, res) => {
    MongoClient.connect(url, function(err, client) {
        var data_save = req.body;
        var created_date = new Date().toISOString();
        data_save.created_date = created_date;
        data_save.updated_date = created_date;
        data_save.mat_khau = md5(data_save.mat_khau);

        if(err)
            console.log(err);
        const db = client.db(dbName);
        const collection_user = db.collection('users');
        collection_user.insertOne(data_save, () => {
            res.json({
                'xu_ly': 'đăng ký user mới',
                data_send: data_save
            });
        })
    });
});

router.put('/:id_user', (req, res) => {
    //console.log(req.params.email);
    //console.log(req.body);
    MongoClient.connect(url, function(err, client) {
        if(err)
            console.log(err);
        const db = client.db(dbName);
        const collection_user = db.collection('users');
        delete req.body._id;

        collection_user.findOne({_id: ObjectID(req.params.id_user)}, function(err, info_user){
            if(err)
                console.log(err);
            var data_save = req.body;
            if(req.body.mat_khau == info_user.mat_khau){
                data_save.mat_khau = info_user.mat_khau;
            }
            else {
                data_save.mat_khau = md5(req.body.mat_khau);
            }
            var updated_date = new Date().toISOString();
            data_save.updated_date = updated_date;
            //collection_user.updateOne({email: req.params.email}, { $set: req.body }, () => {
            collection_user.updateOne({_id: ObjectID(req.params.id_user)}, { $set: data_save }, () => {
                res.json({
                    'xu_ly': 'update user ' + req.params.id_user + ' thành công',
                    data_send: req.body
                });
            });
        });
    });
});

router.delete('/:id_user', authenticate.auth, (req, res) => {
    console.log(req.params.email);
    MongoClient.connect(url, function(err, client) {
        if(err)
            console.log(err);
        const db = client.db(dbName);
        const collection_user = db.collection('users');
        collection_user.deleteOne({_id: ObjectID(req.params.id_user)}, () => {
            res.json({
                'xu_ly': 'delete user ' + req.params.email + ' thành công',
                data_send: req.body
            });
        });
        
    });
});

// router.post('/log-in', (req, res) => {
//     console.log(req.body);
//     MongoClient.connect(url, function(err, client) {
//         if(err)
//             console.log(err);
//         const db = client.db(dbName);
//         const collection_user = db.collection('users');
//         collection_user.findOne({tai_khoan: req.body.tai_khoan}, (err, result) => {
//             if(err)
//                 console.log(err);

//             if(typeof result != 'undefined' && result != null){
//                 if(result.mat_khau == md5(req.body.mat_khau)){
//                     //res.status(401);
//                     result.mat_khau = null;
//                     res.json({
//                         'xu_ly': 'đăng nhập thành công',
//                         data_send: result
//                     });
//                 }
//                 else{
//                     res.status(401);
//                     res.json({
//                         'xu_ly': 'xử lý đăng nhập thất bại, sai tài khoản hoặc mật khẩu',
//                         error: true
//                     });
//                 }
//             }
//             else{
//                 res.status(401);
//                 res.json({
//                     'xu_ly': 'xử lý đăng nhập thất bại, sai tài khoản hoặc mật khẩu',
//                     error: true
//                 });
//             }
//         });
        
//     });
// });

router.post('/admin-log-in', (req, res) => {

    console.log(req.body);

    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query(`SELECT * FROM nguoi_dung WHERE ten_dang_nhap = ?`, [req.body.ten_dang_nhap] , 
        function (error, results, fields) {
          
          // Handle error if not exist
          if (error) throw error;

          var string_token = '';

          if(results.length && results[0]){ // if account exist

              if(results[0].mat_khau == md5(req.body.mat_khau)){ // if password correct

                connection.query(`SELECT * FROM nguoi_dung WHERE ten_dang_nhap = ?`, [results[0].ma], 
                function (error, results_token, fields) {

                    if(error) throw error;

                    string_token = base64.encode(results[0].email + results[0].ten_dang_nhap + uuidv4()); // token formula
                    console.log(string_token);
                    created_date = (new Date().toISOString().split('.'))[0].replace(/T/,' ');
                    updated_date = (new Date().toISOString().split('.'))[0].replace(/T/,' ');
                    expired_date = (new Date(new Date().getTime()+(30*24*60*60*1000)).toISOString().split('.'))[0].replace(/T/,' '); // expired date = created date + 30 days

                    if(results_token.length) { // if already have token then up date exist one with new token for exist account
                        connection.query(`UPDATE token 
                                        SET token = ?, updated_date = ?, expired_date = ? 
                                        WHERE user_id = ? `,
                        [string_token, updated_date, expired_date, results[0].ma],
                        function (error, results, fields) {
                            if(error) throw error;

                            var response = {
                                error: false,
                                token: string_token,
                                message: "Login successful"
                            }

                            res.json(response);

                            connection.release();
                            
                        }); 
                    }
                    else {  // if do not have token then create new token for exist account
                        connection.query(`INSERT INTO token(token, 
                                            created_date, 
                                            expired_date, 
                                            user_id, 
                                            type_token) 
                                        VALUES (?, ?, ?, ?, ?)`, 
                        [string_token, created_date, expired_date, results[0].ma, 'authorized'], 
                        function (error, results, fields) {
                            if(error) throw error;

                            var response = {
                                error: false,
                                token: string_token,
                                message: "Login successful"
                            }
                            
                            res.json(response);

                            connection.release();
                            
                        }); 
                    }
                });

              }

              else { // if wrong password
                var error = {
                    error: true,
                    message: "Username or password not correct"
                }
                res.json(error);
              }

          }

          else { // if account not exist
            var error = {
                error: true,
                message: "Account not exist"
            }
            res.json(error);
          }     
          
        });
    });

})

router.post('/admin-authorized', (req, res) => {
    console.log(req.header('authorization'));    

    if(authorized){
        authorized = authorized.split(' ')[1];
        
        pool.getConnection(function(err, connection) {
            if (err) throw err; // not connected!
    
           
            connection.query(`SELECT mqt.*
            FROM token t
            JOIN nguoi_dung nd
            ON nd.ma = t.user_id
            JOIN quyen_nguoi_dung_menu_quan_tri qndmqt
            ON nd.ma_quyen = qndmqt.id_quyen_nguoi_dung
            JOIN menu_quan_tri mqt
            ON qndmqt.id_menu_quan_tri = mqt.id
            WHERE t.token = ?`, 
            [authorized],
            function (error, results_permission, fields) {
                if (err) throw err;
    
                res.json({
                    error: true,
                    permission: results_permission
                });
    
            });
    
        });
        
    }

    

});

module.exports = router;