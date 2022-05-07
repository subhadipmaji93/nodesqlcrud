const mysql = require("mysql");
require("dotenv").config();
const dbConn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

dbConn.connect(function (err) {
  if (err) {
    console.log("Database connection Error" + err.code);
    return;
  }
  console.log("database connected successfully");
});

module.exports = dbConn;
