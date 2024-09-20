const express = require('express')
const usersRouter = require('./users.routes')

const mainRouter = express.Router()

mainRouter.use('/api/users', usersRouter)
mainRouter.use('*', (req, res, next) => {
    res.status(404).send({ status: "error", error: 'Requested path not found', });
})

module.exports = mainRouter 