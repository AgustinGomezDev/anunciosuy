import React from 'react'
import { Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast';

const NoHeaderFooterLayout = () => {
    return (
        <div>
            <main className="bg-[#f9f9f9]">
                <div className="min-h-screen">
                    <Outlet />
                </div>
            </main>
            <Toaster 
                position="top-center"
                reverseOrder={false} />
        </div>
    )
}

export default NoHeaderFooterLayout