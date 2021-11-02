const mongoose = require('../../../common/services/mongodb');
const userModel = require('../models');



const Usuario = mongoose.model('User', userModel)

const getUsers = async(req, res) => {
    try {
        const users = await Usuario.find();
        res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

const addUser = async(req, res) => {
    try {
        const user = new Usuario(req.body)
        await user.save()

        res.status(200).json({ ok: true })
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

const findById = (req, res) =>{
    try{
        const user = Usuario.findById(req.params.id)
        res.status(200).json(user)
    }catch (error){
        return res.status(500).json({message: error})
    }
}

module.exports = {findById, addUser, getUsers};

