// const mysql = require('mysql2');
// const dotenv = require('dotenv');

// dotenv.config();
// console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);
// const pool = mysql.createPool({
//   host: process.env.DB_HOST || 'localhost',
//   user: process.env.DB_USER || 'root',
//   password: process.env.DB_PASSWORD || '',
//   database: process.env.DB_NAME || 'express_app_db',
//   connectionLimit: 10,
// });


const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'url_shortener',
});

connection.connect((err) => {
  if (err) {
    console.error('Connection failed:', err.message);
  } else {
    console.log('Connected to MySQL database successfully!');
  }
  connection.end();
});

// module.exports = pool.promise(); // Export promise-based pool for async/await support
