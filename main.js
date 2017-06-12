const express = require("express"),
    app = express(),
    ejs = require("ejs"),
    bodyparser = require("body-parser"),
    mysql = require("mysql");

app.use(express.static("./static"));
app.use(bodyparser.urlencoded({ extended: false }));


app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
require("./config/config.js")(app);
app.listen(8080, function() {
    console.log(8080);
});