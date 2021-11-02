const express = require('express')
const { getUsers, addUser, findById } = require('./controllers')
const router = express.Router()

router.route('/users')
    .get(getUsers)
    .post(addUser)

router.route('/users/:id')
    .get(findById)

module.exports = router