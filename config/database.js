const mysql = require('mysql');
const util = require('util');

const databaseName = process.env.database;

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: databaseName
});

pool.query = util.promisify(pool.query);
module.exports = pool;