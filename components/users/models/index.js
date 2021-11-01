const mongoose = require('mongoose')

const userModel = {
    nombre: String,
    email: String,
    password: String,
    userId: String, 
    postId: String
};


module.exports = {userModel: userModel};