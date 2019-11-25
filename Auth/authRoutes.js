const router = require('express').Router();
const { login, logout, signUp } = require('./authController');

router.get('/signUp', signUp);

router.get('/login', login);

router.get('/logout', logout);

module.exports = router;