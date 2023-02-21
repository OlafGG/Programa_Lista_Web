const Sequilize = require('sequelize');

const mysql = require("mysql2");

// Open the connection to MySQL server
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

// Run create database statement
connection.query(
  `CREATE DATABASE IF NOT EXISTS ${process.env.database}`,
  function (err, results) {
    console.log(results);
    console.log(err);
  }
);

// Close the connection
connection.end();



const db = new Sequilize(process.env.database, 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamps: false
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 100000
    }
});

module.exports = {
    db
};




/*const mysql = require('mysql');
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
module.exports = pool;*/