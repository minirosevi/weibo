const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../config/mysql.js')(mysql);

router.get('/data', function(req, res) {
    connection.query('select * from articles', function(err, result) {
        if (err) throw err;
        res.send({
            code: 0,
            data: result
        });
    });
});
module.exports = router;