import { useAuth } from '@/context/AuthContext'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { zoomies } from 'ldrs'

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth()
    zoomies.register()

    if (loading)
        return (
            <l-zoomies
                size="80"
                stroke="5"
                bg-opacity="0.1"
                speed="1.4"
                color="black"
            />
        )


    if (!user && loading === false) return <Navigate to="/registro" />

    return children
}

export default ProtectedRoute