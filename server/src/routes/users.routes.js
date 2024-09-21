const express = require('express')
const UserController = require('./../controllers/users.controller')
const { authToken } = require('../utils/jwt')

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

router.post('/login', (req, res, next) => {
    try {
        const user = UserController.login(req, res, next)
    } catch (error) {
        res.status(500).json({
            message: 'Error iniciando sesión.',
            error: error.message
        })
    }
})

router.post('/logout', (req, res, next) => {
    try {
        const user = UserController.logout(req, res, next)
    } catch (error) {
        res.status(500).json({
            message: 'Error cerrando sesión.',
            error: error.message
        })
    }
})

module.exports = router 