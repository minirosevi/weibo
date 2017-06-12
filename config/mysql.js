module.exports = function(mysql) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '3336',
        port: 3306,
        database: 'project'
    })
    connection.connect();
    return connection;
}