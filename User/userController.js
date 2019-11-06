const User = require("./User");

const findAllUsers = (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
}

const findUser = (req, res) => {
  User.find({ _id: req.params.user_id })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
}

const createUser = (req, res) => {
  User.create(req.body)
  .then(user => {
    res.status(201).json({ message: 'user saved!' });
  })
  .catch(err => {
    res.status(500).json({ message: err });
  });
}

const modifyUser = (req, res) => {
  User.updateOne({ _id: req.params.user_id }, req.body)
  .then(user => {
    res.status(200).json({ message: 'user updated!' });
  })
  .catch(err => {
    res.status(500).json({ message: err });
  })
}

const deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.user_id })
  .then(user => {
    res.status(200).json({ message: 'user delete!' });
  })
  .catch(err => {
    res.status(500).json({ message: err });
  })
}

module.exports = {
  findAllUsers,
  findUser,
  createUser,
  modifyUser,
  deleteUser
}
