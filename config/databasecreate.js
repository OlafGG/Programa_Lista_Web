const mysql = require("mysql2");


class initiation {
  conectar () {
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

    
  }
  
}

module.exports = initiation;