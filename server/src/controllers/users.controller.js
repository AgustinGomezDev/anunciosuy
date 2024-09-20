const userModel = require('../models/users.model')
const { createHash, isValidPassword } = require('../utils/bcrypt')
// const { generateToken, generateTokenResetPassword, decodeJWT } = require('../utils/jwt')

class UserController {
    register = async (req, res, next) => {
        try {
            const { name, phone, email, password, dateOfBirth } = req.body

            if (!name || !phone || !email || !password || !dateOfBirth) {
                return res.status(400).json({ message: 'Faltan datos para el registro.' });
            }
            
            const user = await userModel.findOne({ email })
            if (user) return res.status(409).json({ message: 'El correo electrónico ya está en uso.' });

            const newUser = {
                name,
                phone,
                email,
                password: createHash(password),
                dateOfBirth
            }

            let result = await userModel.create(newUser)
            return res.status(201).json({ message: 'Usuario registrado correctamente.', user: result });
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new UserController()