import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='border-t '>
            <div className='container mx-auto py-5 md:py-10 px-5'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-semibold mb-3">Enlaces</h3>
                        <ul className="space-y-2">
                            <li><Link to="/inicio-sesion" className="text-sm text-gray-500 hover:text-[#3b82f6]">Inicio sesión</Link></li>
                            <li><Link to="/registro" className="text-sm text-gray-500 hover:text-[#3b82f6]">Registro</Link></li>
                            <li><Link to="/anuncios" className="text-sm text-gray-500 hover:text-[#3b82f6]">Anuncios</Link></li>
                            <li><Link to="/publicar" className="text-sm text-gray-500 hover:text-[#3b82f6]">Publicar anuncio</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Ayuda</h3>
                        <ul className="space-y-2">
                            <li><Link to="/centro-de-ayuda" className="text-sm text-gray-500 hover:text-[#3b82f6]">Centro de ayuda</Link></li>
                            <li><Link to="/contacto" className="text-sm text-gray-500 hover:text-[#3b82f6]">Contacto</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link to="/terminos-y-condiciones" className="text-sm text-gray-500 hover:text-[#3b82f6]">Términos y Condiciones</Link></li>
                            <li><Link to="/politica-de-privacidad" className="text-sm text-gray-500 hover:text-[#3b82f6]">Política de Privacidad</Link></li>
                            <li><Link to="/politica-de-cookies" className="text-sm text-gray-500 hover:text-[#3b82f6]">Política de Cookies</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2">
                        {/* <p className='text-xl font-bold'>AnunciosUy</p> */}
                        <img className='w-52' src="/AnunciosUy.png" alt="AnunciosUy Logo" />
                    </div>
                    <div className="text-sm text-gray-500 mt-4 md:mt-0">&copy; 2024 AnunciosUy - Todos los derechos reservados</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer