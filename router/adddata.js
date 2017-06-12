const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../config/mysql.js')(mysql);

router.post('/adddata', function(req, res) {
    connection.query('insert into articles (title,content) values(?,?)', [req.body.title, req.body.content], function(err, result) {
        if (err) {
            throw err;
        } else {
            res.send({ code: 0, data: "添加成功" });
        }


    });
});

module.exports = router;