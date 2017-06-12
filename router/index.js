const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../config/mysql.js')(mysql);

router.get('/', function(req, res) {
    connection.query('select * from articles', function(err, result) {
        res.render('index', {
            data: result
        })
    })
});
module.exports = router;