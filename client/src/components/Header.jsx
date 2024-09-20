import React from 'react'
import { Button } from './ui/button'
import { HeartRounded } from "untitledui-js-base"
import { Plus } from "untitledui-js-base"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between items-center py-2'>
      <div>
        <h1 className='text-4xl font-extrabold tracking-tighter'>Anuncios<span className=''>Uy</span></h1>
      </div>
      <div className='flex gap-2 items-center'>
        <HeartRounded size="24" />
        <Button className="flex gap-1 justify-between">
          <Plus size="22" />
          Publicar
        </Button>
        <div className='flex gap-1'>
          <Link to="/inicio-sesion">
            <Button>Iniciar sesión</Button>
          </Link>
          <Link to="/registro">
            <Button variant="outline">Registrarme</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header