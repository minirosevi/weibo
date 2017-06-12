const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../config/mysql.js')(mysql);

router.get('/content', function(req, res) {
    connection.query('select * from articles where id=?', [req.query.id], function(err, result) {
        res.render('content', {
            data: result[0].content
        });
    });
});

module.exports = router;