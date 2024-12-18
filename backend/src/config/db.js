const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'express_app_db',
  connectionLimit: 10,
});



module.exports = pool.promise(); // Export promise-based pool for async/await support
