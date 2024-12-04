const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const userId = await User.createUser(name, email);
    res.status(201).json({ id: userId, name, email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
