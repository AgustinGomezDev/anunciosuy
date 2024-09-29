import LatestAdverts from '@/components/LatestAdverts';
import SearchForm from '@/components/SearchForm';
import { Button } from '@/components/ui/button';
import React from 'react'
import { Link } from 'react-router-dom';
import { PlusCircle, Circle, Users01, TrendUp01, Home03, BriefCase01, ShoppingBag02, Monitor05, Announcement01, Clock, MarkerPin01 } from "untitledui-js-base"

const latestAdverts = [
    {
        id: 1,
        title: "Spacious Downtown Apartment",
        category: "Property",
        price: "$1,200/month",
        location: "New York, NY",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 2,
        title: "Senior Web Developer Needed",
        category: "Jobs",
        price: "$80,000 - $120,000/year",
        location: "Remote",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 3,
        title: "2018 Toyota Camry for Sale",
        category: "Buy & Sell",
        price: "$15,000",
        location: "Los Angeles, CA",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        id: 4,
        title: "Professional Photography Services",
        category: "Services",
        price: "Starting at $100/hour",
        location: "Chicago, IL",
        image: "/placeholder.svg?height=200&width=300",
    },
]

const Landing = () => {
    return (
        <div className=''>
            <section className='flex flex-col items-center justify-center px-5 py-10 md:py-36 gap-5 bg-gray-200'>
                <div className='flex flex-col items-center justify-center text-center container'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance'>Publicá tu Anuncio <span className='text-blue-500'>Gratis</span></h1>
                    <p className="max-w-lg text-gray-500 text-md md:text-lg text-balance">Conectá con el público, vendé, contratá o publicitá: todo en un solo lugar, sin costo alguno.</p>
                </div>
                <Link to="/publicar">
                    <Button className="w-40 md:w-80 h-14" variant="primary">Publicar</Button>
                </Link>
            </section>

            <section className='py-10 md:py-36 flex flex-col items-center'>
                <div className='text-center mb-10 md:mb-0 container'>
                    <h2 className='text-xl md:text-3xl font-bold'>Encontrá exactamente lo que necesitás</h2>
                    <p className='text-gray-500 text-md mx-2'>Buscá por palabras clave, categoría o ubicación para obtener los resultados que buscás.</p>
                </div>
                <SearchForm />
            </section>

            <section className='py-10 md:py-36 flex flex-col items-center bg-gray-200'>
                <h2 className="text-3xl font-bold text-center mb-12">Anuncios más recientes</h2>
                <LatestAdverts />

                <Link to="/anuncios" className="text-center mt-8">
                    <Button variant="primary">Ver todos los anuncios</Button>
                </Link>
            </section>

            <section className='px-5 py-10 md:py-20 flex flex-col items-center'>
                <h2 className="text-3xl font-bold text-center mb-12">Explorá nuestras categorías</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                        { icon: Circle, label: "Motor" },
                        { icon: Home03, label: "Inmobiliaria" },
                        { icon: BriefCase01, label: "Empleo" },
                        { icon: Announcement01, label: "Servicios" },
                        { icon: Monitor05, label: "Informática" },
                        { icon: ShoppingBag02, label: "Moda" },
                    ].map((category, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2 group">
                            <Link to={`/anuncios?category=${category.label}`} className="p-4 bg-[#3b82f6]/10 rounded-full transition-colors group-hover:bg-[#3b82f6]/20">
                                <category.icon className="h-8 w-8 text-[#3b82f6]" />
                            </Link>
                            <span className="text-sm font-medium">{category.label}</span>
                        </div>
                    ))}
                </div>
                <Link>
                    <Button variant="primary">Ver todas las categorías</Button>
                </Link>
            </section>

            <section className='px-5 py-10 md:py-20 flex flex-col items-center bg-gray-200'>
                <h2 className='text-xl md:text-3xl font-bold'>Cómo funciona</h2>
                <div className='mt-5 container'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-[#3b82f6] text-white rounded-full p-3 mb-4">
                                <PlusCircle className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Crea tu anuncio</h3>
                            <p className="text-gray-600">Regístrate gratis y crea tu anuncio fácilmente en minutos</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-[#3b82f6] text-white rounded-full p-3 mb-4">
                                <Users01 className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Alcanza tu audiencia</h3>
                            <p className="text-gray-600">Tu anuncio es visible inmediatamente para cientos de personas</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-[#3b82f6] text-white rounded-full p-3 mb-4">
                                <TrendUp01 className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Potencia tu negocio</h3>
                            <p className="text-gray-600">Sigue el rendimiento de tus anuncios y observa cómo crecen</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='px-5 py-10 md:py-20 flex flex-col items-center'>
                <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir AnunciosUy?</h2>
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container">
                        <div className="flex items-start space-x-4">
                            <PlusCircle className="h-6 w-6 text-[#3b82f6] mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">100% Gratuito</h3>
                                <p className="text-gray-600">Publicá y gestioná tus anuncios sin costos escondidos ni comisiones.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Users01 className="h-6 w-6 text-[#3b82f6] mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Larga audienca</h3>
                                <p className="text-gray-600">Alcanza cientos de ponteciales compradores mediante varias categorías.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <TrendUp01 className="h-6 w-6 text-[#3b82f6] mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Seguimiento de rendimiento</h3>
                                <p className="text-gray-600">Monitoreá el rendimiento de tu anuncio con nuestras estadísticas.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Circle className="h-6 w-6 text-[#3b82f6] mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Plataforma segura</h3>
                                <p className="text-gray-600">Tus datos están seguros ya que nunca te vamos a pedir información sensibles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing