import { registerRequest, loginRequest, logoutRequest } from '@/api/users.api';
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be use within an AuthProvider')
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const register = async (user) => {
        try {
            const res = await registerRequest(user)
            return res
        } catch (error) {
            throw new Error(error)
        }
    }

    const login = async (user) => {
        try {
            const res = await loginRequest(user)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            throw Error(error)
        }
    }

    const logout = async () => {
        try {

        } catch (error) {
            throw Error(error)
        }
    }

    // useEffect(() => {
    //     const cookies = 0

    //     if (cookies) {
    //         try {
    //             const res = verifyTokenRequest()
    //                 .then(result => {
    //                     setUser(res.data)
    //                     setIsAuthenticated(true)
    //                 })
    //         } catch (error) {
    //             console.log(error)
    //             setIsAuthenticated(false)
    //             setUser(null)
    //         }
    //     }
    // })

    return (
        <AuthContext.Provider value={{
            register,
            login,
            logout,
            isAuthenticated,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}