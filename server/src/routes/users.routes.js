const express = require('express')
const UserController = require('./../controllers/users.controller')

const router = express.Router()

router.post('/register', (req, res, next) => {
    try {
        const user = UserController.register(req, res, next)
    } catch (error) {
        res.status(500).json({
            message: 'Error registrando un nuevo usuario.',
            error: error.message
        })
    }
})

module.exports = router 