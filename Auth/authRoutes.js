const router = require('express').Router();
const { login, logout, signUp } = require('./authController');

router.post('/signUp', signUp);

router.post('/login', login);

router.post('/logout', logout);

module.exports = router;