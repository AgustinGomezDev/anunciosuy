import React from 'react'
import SignUpForm from '@/components/SignUpForm'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowLeft } from "untitledui-js-base"

const SignUp = () => {
    return (
        <div className='min-h-screen w-full grid grid-cols-1 md:grid-cols-2'>
            <div className='hidden md:flex bg-gradient-to-br from-sky-400 to-blue-500 w-full justify-center items-center relative'>
                <div className='absolute inset-0 h-full w-full opacity-45 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]'></div>
                <div className='flex flex-col justify-between gap-10 backdrop-blur-md bg-white bg-opacity-15 border border-gray-300 min-h-96 rounded mx-32 p-2 sm:p-14'>
                    <h1 className='font-bold text-xl sm:text-2xl md:text-4xl lg:text-6xl tracking-tighter leading-none text-balance text-white z-0'>Tu portal de anuncios, creado por uruguayos para <span className='text-[#0038a8ff]'>uruguayos</span></h1>
                    <h2 className='font-regular text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 mt-4 z-0 tracking-tighter'>Publica y encuentra anuncios <span className='font-bold'>gratis</span>, ¡en solo unos clics!</h2>
                </div>
            </div>
            <div className='w-full flex flex-col justify-evenly bg-background p-10 md:px-20 md:py-14 relative'>
                <Link className='absolute top-0 left-0 m-5 flex gap-1 items-center group' to="/">
                    <ArrowLeft size="24" className='group-hover:-translate-x-2 transition-all' />
                    <span className='font-medium'>Inicio</span>
                </Link>
                <div>
                    <h3 className='text-6xl font-extrabold tracking-tighter'>AnunciosUy</h3>
                    <h4 className='text-xl font-normal text-gray-600 mt-2 tracking-tighter'>Bienvenido👋</h4>
                    <h5 className='text-lg font-light text-gray-600 tracking-tighter'>Rellena el formulario para registrarte</h5>
                </div>
                <SignUpForm />
                <div className='flex justify-end items-center gap-2'>
                    <p>¿Ya tienes una cuenta activa?</p>
                    <Link to="/inicio-sesion">
                        <Button variant="outline">Iniciar sesión</Button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default SignUp
