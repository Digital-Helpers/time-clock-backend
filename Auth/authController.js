const bcrypt = require('bcryptjs');
const User = require('../User/User');

const signUp = (req, res) => {
    User.findOne({email: req.body.email})
    .then(user => {
        if(user) return res.status(400).json({msg: 'User already exists, Please login.'});
    })
    const newUser = new User(req.body);
    bcrypt.hash(newUser.password, 10, (err, hash) => {
        if (err) {
            return err;
        }
        newUser.password = hash;
        newUser.save();
        return res.status(200).json({msg: 'user saved!'});
    })
    .catch(err => {return err});
    
}

const login = (req, res) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if(!user) return res.status(400).json({msg: 'email or password is incorrect!'});
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
            if (!isMatch) {
                return res.status(400).json({msg: 'email or password is incorrect!'});
            }
            return res.status(200).json({msg: 'signed in successfully'});
        })
    }) 
    .catch(err => {return err}); 
}

const logout = (req, res) => {
    return res.status(200).json({msg: 'logout successful'});
}

module.exports = {
    signUp,
    login,
    logout
}