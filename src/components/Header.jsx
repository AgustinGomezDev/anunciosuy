import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { HeartRounded, Plus, Menu01, User01 } from "untitledui-js-base"
import { useAuth } from '@/context/AuthContext'
import { zoomies } from 'ldrs'

const Header = () => {
  const { user, logout, loading } = useAuth()
  const navigate = useNavigate()
  zoomies.register()

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logoutFn = async () => {
    await logout()
    navigate('/inicio-sesion')
  }

  return (
    <header className='py-3 px-5 md:px-0 sticky top-0 z-50 w-full border-b border-gray-200 bg-white/50 backdrop-blur-md'>
      <div className='container mx-auto flex justify-between items-center'>


        <div>
          <Link to="/">
            {/* <p className='text-4xl font-extrabold tracking-tighter transition hover:scale-105'>Anuncios<span className=''>Uy</span></p> */}
            <img className='w-52 transition hover:scale-105' src="/AnunciosUy.png" alt="AnunciosUy Logo" />
          </Link>
        </div>
        <div className='hidden md:flex gap-2 items-center'>
          {/* <HeartRounded size="24" /> */}
          {loading ?
            (<l-zoomies
              size="80"
              stroke="5"
              bg-opacity="0.1"
              speed="1.4"
              color="black"
            />) : user && user._id ?
              (
                <div className='flex gap-1'>
                  <Link to="/publicar">
                    <Button className="flex gap-1 justify-between" variant="primary">
                      <Plus size="22" />
                      Publicar
                    </Button>
                  </Link>
                  <Link to="/cuenta">
                    <Button variant="outline" className="flex gap-1 justify-between"><User01 size="22" /> Cuenta</Button>
                  </Link>
                  <Button variant="outline" onClick={() => logoutFn()}>Cerrar sesión</Button>
                </div>
              )
              :
              (
                <div className='flex gap-1'>
                  <Link to="/inicio-sesion">
                    <Button variant="primary">Iniciar sesión</Button>
                  </Link>
                  <Link to="/registro">
                    <Button variant="outline">Registrarme gratis</Button>
                  </Link>
                </div>
              )}
        </div>

        {/* RESPONSIVE DESIGN */}
        <Menu01 size="24" className='cursor-pointer hover:bg-gray-200 box-content p-2 rounded-full transition-colors md:hidden' onClick={toggleMenu} />

        {menuOpen && (
          <div className='absolute top-16 right-0 mr-5 border border-gray-200 bg-white/80 shadow-2xl rounded-lg p-4 w-40'>
            <ul className='flex flex-col gap-2'>
              {user && user._id ? (
                <>
                  <li>
                    <Link to="/publicar">
                      <Button className="w-full flex justify-around" variant="primary">
                        <Plus size="22" />
                        Publicar
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/cuenta">
                      <Button variant="outline" className="w-full flex justify-around"><User01 size="22" />  Cuenta</Button>
                    </Link>
                  </li>
                  <li>
                    <Button variant="outline" className="w-full" onClick={() => logoutFn()} >Cerrar sesión</Button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/inicio-sesion">
                      <Button className="w-full" variant="primary">Iniciar sesión</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/registro">
                      <Button variant="outline" className="w-full">Registrarme</Button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header