import { useAuth } from '@/context/AuthContext'
import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) return <div>Cargando...</div>;

    if(!user && loading === false) return <Navigate to="/registro" />

    return children
}

export default ProtectedRoute