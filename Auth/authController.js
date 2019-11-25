const signUp = (req, res) => {
    res.json({msg: 'signUp successful'});
}

const login = (req, res) => {
    res.send('login successful');
}

const logout = (req, res) => {
    res.json({msg: 'logout successful'});
}

module.exports = {
    signUp,
    login,
    logout
}