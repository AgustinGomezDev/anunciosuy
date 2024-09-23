import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { HeartRounded, Plus, Menu01 } from "untitledui-js-base"
import { useAuth } from '@/context/AuthContext'

const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logoutFn =  async () => {
    await logout()
    navigate('/inicio-sesion')
  }

  return (
    <header className='flex justify-between items-center py-2'>
      <div>
        <Link to="/">
          <h1 className='text-4xl font-extrabold tracking-tighter'>Anuncios<span className=''>Uy</span></h1>
        </Link>
      </div>
      <div className='hidden md:flex gap-2 items-center'>
        {/* <HeartRounded size="24" /> */}
        {user && user._id ?
          (
            <div className='flex gap-1'>
              <Link to="/publicar">
                <Button className="flex gap-1 justify-between">
                  <Plus size="22" />
                  Publicar
                </Button>
              </Link>
              <Link to="/cuenta">
                <Button variant="outline">Cuenta</Button>
              </Link>
              <Button variant="outline" onClick={() => logoutFn()}>Cerrar sesión</Button>
            </div>
          )
          :
          (
            <div className='flex gap-1'>
              <Link to="/inicio-sesion">
                <Button>Iniciar sesión</Button>
              </Link>
              <Link to="/registro">
                <Button variant="outline">Registrarme</Button>
              </Link>
            </div>
          )}
      </div>

      {/* RESPONSIVE DESIGN */}
      <Menu01 size="24" className='cursor-pointer hover:bg-gray-200 box-content p-2 rounded-full transition-colors md:hidden' onClick={toggleMenu} />

      {menuOpen && (
        <div className='absolute top-16 right-0 mr-5 bg-white shadow-lg rounded-lg p-4 w-40'>
          <ul className='flex flex-col gap-2'>
            {user && user._id ? (
              <>
                <li>
                  <Link to="/publicar">
                    <Button className="w-full">
                      <Plus size="22" />
                      Publicar
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/cuenta">
                    <Button variant="outline" className="w-full">Cuenta</Button>
                  </Link>
                </li>
                <li>
                  <Button variant="outline" className="w-full" onClick={ () => logoutFn() } >Cerrar sesión</Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/inicio-sesion">
                    <Button className="w-full">Iniciar sesión</Button>
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
    </header>
  )
}

export default Header