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

    pool.getConnection(function(err, connection) {

        if(error) throw error;

        connection.query('SELECT * FROM san_pham ORDER BY so_lan_xem DESC LIMIT 4',function(error, results, fields) {
            connection.release();

            if(error) throw error;

            res.json(results);
        });
    });
});

module.exports = router;