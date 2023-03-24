// dotenv module loads environmental variables from a .env file into a process.env file which can be used
require('dotenv').config();

// module that helps node.js applications connect and use mysql easier
const mysql = require('mysql2');

// Use a connection pool to reduce the time spent connecting to mysql servers by reusing a previous connection. Improves overhead compared to a regular database connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
})

module.exports = pool.promise();