import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import { PlusCircle, Circle, Users01, TrendUp01, Home03, BriefCase01, ShoppingBag02, Monitor05, Announcement01, ArrowLeft } from "untitledui-js-base"

const NotFound = () => {
    return (
        <main className="flex-1 flex items-center justify-center">
            <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
                <div className="flex flex-col items-center space-y-8 text-center">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                            404 - Página no encontrada
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                            Ups! La página que estabas buscando no existe o ha sido movida.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-lg text-gray-600">Algunos enlaces que pueden ayudarte:</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                            <Button className="w-full sm:w-auto" variant="primary">
                                <Link to="/" className='flex items-center gap-2'>
                                    <Home03 className="mr-2 h-4 w-4" />
                                    Ir al inicio
                                </Link>
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto">
                                <Link to="javascript:history.back()" className='flex items-center gap-2'>
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Volver atrás
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NotFound