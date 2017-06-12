const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../config/mysql.js')(mysql);

router.post('/hits', function(req, res) {
    connection.query('select * from articles where id=?', [req.body.id], function(err, result) {
        if (err) {
            throw err;
        } else {
            if (result.length > 0) {
                connection.query("update articles set hits=? where id=?", [req.body.hits, req.body.id], function(err, result) {
                    if (err) throw err;
                });
            }
        }
    });
});

module.exports = router;