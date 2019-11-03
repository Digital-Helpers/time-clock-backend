const express = require("express");
const mongoose = require("mongoose");
const User = require("./User");
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

module.exports = router;
