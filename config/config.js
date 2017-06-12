const index = require('../router/index');
const content = require('../router/content');
const add = require('../router/add');
const adddata = require('../router/adddata');
const hits = require('../router/hits');

module.exports = function(app) {
    app.get('/', index);
    app.get("/content", content);
    app.get("/add", add);
    app.post("/adddata", adddata);
    app.post("/hits", hits);
};