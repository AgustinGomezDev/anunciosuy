const jwt = require('jsonwebtoken')

const createToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_KEY, { expiresIn: '1d' })
}

const authToken = (req, res, next) => {
    const authCookie = req.headers.cookie
    if (!authCookie) {
        return res.status(401).send({
            error: 'Usuario no autenticado o falta de token.'
        })
    }

    const token = authCookie.split('=')[1]

    jwt.verify(token, process.env.JWT_KEY, (error, credentials) => {
        if (error) return res.status(403).send({
            error: "Token inválido."
        })
        req.user = credentials.user
        next()
    })
}

module.exports = { createToken, authToken }