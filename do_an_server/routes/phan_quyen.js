var express = require('express');
var router = express.Router();
var fs = require('fs');
var authenticate = require('../middleware/auth');
var md5 = require('md5');
var mysql = require('mysql');

const { v4: uuidv4 } = require('uuid');
var base64 = require('base-64');

var Cookies = require('cookies');

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'shop_ban_hang'
});

/* GET users listing. */
router.get('/', function(req, res, next) {

    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query(`SELECT * FROM quyen_nguoi_dung`, function (error, results, fields) {
            if (err) throw err; // not connected!

            res.json(results);
        });

    });
    
});

router.get('/:id_quyen', function(req, res, next){
    pool.getConnection(function(err, connection) {
        connection.query(`SELECT mqt.* 
        FROM menu_quan_tri mqt 
        JOIN bang_phan_quyen bpq
        ON mqt.id = bpq.id_menu_quan_tri
        WHERE bpq.id_quyen_nguoi_dung = ?`, 
        req.params.id_quyen,
        function (error, results, fields) {
            // When done with the connection, release it.
            connection.release();
         
            // Handle error after the release.
            if (error) throw error;
         
            res.json(results);
        });
    
    });
});

module.exports = router;
