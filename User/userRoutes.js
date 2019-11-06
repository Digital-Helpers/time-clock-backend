const express = require("express");
const { findAllUsers, findUser, createUser, modifyUser, deleteUser } = require('./userController');
const router = express.Router();

// Finds all users 
router.get("/", findAllUsers);

// Finds single user by ID
router.get("/:user_id", findUser);

// Creates a new user
router.post('/', createUser);

// modifies an existing user found by ID
router.put('/:user_id', modifyUser);

// delete a user by ID
router.delete('/:user_id', deleteUser);

module.exports = router;
