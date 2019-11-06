const express = require("express");
const { findAllUsers, createUser, modifyUser, deleteUser } = require('./userController');
const router = express.Router();

// Finds all users 
router.get("/", findAllUsers);

// Finds single user by ID
router.get("/:id", findAllUsers);

// Creates a new user
router.post('/', createUser);

// modifies an existing user found by ID
router.put('/:id', modifyUser);

// delete a user by ID
router.delete('/:id', deleteUser);

module.exports = router;
