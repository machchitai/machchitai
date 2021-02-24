var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool =  mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'shop_ban_hang'
});    

router.get('/', function(req,res,next) {
    res.json([]);
});

module.exports = router;