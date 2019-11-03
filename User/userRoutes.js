const express = require("express");
const User = require("./User");
const { createUser } = require('./userController');
const router = express.Router();

router.get("/", (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
});

router.post('/', createUser);

module.exports = router;
// Test
