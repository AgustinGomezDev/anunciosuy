import React from 'react'
import { Outlet } from "react-router-dom"
// import footer from "@/components/footer"
import Header from "@/components/Header"
import { Toaster } from 'react-hot-toast';

const AppLayout = () => {
    return (
        <div>
            <main className="bg-[#f9f9f9]">
                <div className="min-h-screen container mx-auto">
                    <Header />
                    <Outlet />
                </div>
            </main>
            <Toaster 
                position="top-center"
                reverseOrder={false} />
            {/* <Footer /> */}
        </div>
    )
}

export default AppLayout