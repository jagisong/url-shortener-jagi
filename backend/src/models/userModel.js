const db = require('../config/db');

// Get all users
exports.getAllUsers = async () => {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
};

// Create a new user
exports.createUser = async (name, email) => {
    console.log('create user accessed')
    const [result] = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    console.log('create user2 accessed')
  return result.insertId;
};
