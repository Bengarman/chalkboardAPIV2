var dbConnection;
var mysql = require('mysql');
var config = require('./config');


async function connectDB() {
    if (dbConnection == null){
        console.time("Connecting");
        dbConnection = mysql.createConnection({
            host: config.host,
            user: config.user,
            password: config.pass,
            database: config.database
        });

        dbConnection.connect(function(err) {
            if (err) throw err;
            console.timeEnd("Connecting");
        });
    }
    return dbConnection;
}
module.exports = { connectDB, dbConnection }