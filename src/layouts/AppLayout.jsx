import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Toaster } from 'react-hot-toast';

const AppLayout = () => {
    return (
        <div>
            <main className="bg-[#f9f9f9]">
                <Header />
                <div className="min-h-screen">
                    <Outlet />
                </div>
            </main>
            <Toaster
                position="top-center"
                reverseOrder={false} />
            <Footer />
        </div>
    )
}

export default AppLayout