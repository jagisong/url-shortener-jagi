const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

// Route to get all users
userRouter.get('/get-user', userController.getUsers);

// Route to add a new user
userRouter.post('/add-user', userController.addUser);

module.exports = userRouter;
