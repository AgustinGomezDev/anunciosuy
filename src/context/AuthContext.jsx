import { registerRequest, loginRequest, logoutRequest, verifyTokenRequest } from '@/api/users.api';
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be use within an AuthProvider')
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true);

    const register = async (user) => {
        try {
            const res = await registerRequest(user)
            return res
        } catch (error) {
            throw new Error(error)
        }
    }

    const login = async (userData) => {
        try {
            const res = await loginRequest(userData)
            setUser({
                user: res.data.user,
                token: res.data.accessToken
            })
            setIsAuthenticated(true)
            return (res)
        } catch (error) {
            throw Error(error)
        }
    }

    const logout = async () => {
        try {
            const res = await logoutRequest()
            const jwtCookieKey = import.meta.env.VITE_JWT_COOKIE_KEY;
            Cookies.remove(jwtCookieKey);
            setUser(null);
            setIsAuthenticated(false);
        } catch (error) {
            throw Error(error)
        }
    }

    useEffect(() => {
        const jwtCookieKey = import.meta.env.VITE_JWT_COOKIE_KEY;
        const jwtToken = Cookies.get(jwtCookieKey);

        console.log('jwtCookieKey:', jwtCookieKey)
        console.log('jwtToken:', jwtToken)

        if (jwtToken) {
            try {
                const res = verifyTokenRequest()
                    .then(result => {
                        console.log('Result:', result)
                        setUser(result.data.user)
                        setIsAuthenticated(true)
                    }).catch(() => {
                        setIsAuthenticated(false)
                        setUser(null);
                    })
                    .finally(() => {
                        setLoading(false)
                    });
            } catch (error) {
                setIsAuthenticated(false)
                setUser(null)
            }
        }
    }, [user])

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