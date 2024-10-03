import { useAuth } from '@/context/AuthContext'
import useFetch from '@/hooks/useFetch'
import React, { useEffect, useState } from 'react'
import { zoomies } from 'ldrs'
import { timeSince } from '@/utils/timeSince'
import { getAdvertsByUserId } from '@/api/adverts.api'
import { formatPrice } from '@/utils/formatPrice'
import { Link } from 'react-router-dom'
import { Edit02, Trash01, Eye } from "untitledui-js-base"


const Account = () => {
    const [adverts, setAdverts] = useState(null)
    const { user, loading } = useAuth()
    const { fn: GetMyAdverts, loading: loadingAdverts } = useFetch(getAdvertsByUserId)
    zoomies.register()

    if (loading || !user) {
        <div className='w-full flex justify-center items-center mt-5 md:mt-0'>
            <l-zoomies
                size="80"
                stroke="5"
                bg-opacity="0.1"
                speed="1.4"
                color="black"
            />
        </div>
    }

    useEffect(() => {
        const fetchAdverts = async () => {
            try {
                const res = await GetMyAdverts(user._id)
                setAdverts(res.data.data.adverts)
            } catch (error) {
                console.error('Error buscando anuncios del usuario:', error)
            }
        }

        fetchAdverts()
    }, [user])


    return (
        <div className='container mx-auto py-5 min-h-screen px-5'>
            <h2 className='text-3xl font-bold mb-5'>Mi cuenta</h2>
            <div className="bg-white p-5 rounded-lg shadow-md mb-5">
                <p><strong>Nombre:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Teléfono:</strong> {user.phone}</p>
                <p><strong>Fecha de creación:</strong> {new Date(user.createdAt).toLocaleDateString()} <span className='text-sm text-gray-400'>{timeSince(user.createdAt)}</span></p>
            </div>


            <h2 className='text-3xl font-bold mb-5'>Mis anuncios</h2>
            <div className='bg-white rounded-lg shadow-md'>
                {loadingAdverts ? (
                    <div className='w-full flex justify-center items-center py-5'>
                        <l-zoomies
                            size="60"
                            stroke="4"
                            bg-opacity="0.1"
                            speed="1.2"
                            color="black"
                        />
                    </div>
                ) : adverts?.length > 0 ? (
                    <ul className="space-y-4">
                        {adverts.map((advert, index) => (
                            <li className={`pb-4 ${index !== adverts.length - 1 ? 'border-b' : ''} group-hover:bg-gray-200  p-5 flex justify-between items-center`} key={advert._id}>
                                <div>
                                    <h3 className="text-xl font-bold">{advert.title}</h3>
                                    <p className="font-bold text-[#3b82f6]">{formatPrice(advert.price) === '0' ? 'Sin precio' : `$${formatPrice(advert.price)}`}</p>
                                    <p className="text-sm text-gray-400">{advert.category}</p>
                                    <p className="text-sm text-gray-400">{advert.location}</p>
                                    <p className="text-sm text-gray-400">{new Date(advert.createdAt).toLocaleDateString()} - {timeSince(advert.createdAt)}</p>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <Link to={`/anuncios/${advert._id}`} className='flex gap-3 items-center justify-center bg-blue-500 hover:bg-blue-900 transition-all p-2 text-white rounded-full'>
                                        <Eye size="20" /> 
                                        Ver
                                    </Link>
                                    <Link to={`/anuncios/editar/${advert._id}`} className='flex gap-3 items-center justify-center bg-yellow-500 hover:bg-yellow-900 transition-all p-2 text-white rounded-full'>
                                        <Edit02 size="20" />
                                        Editar
                                    </Link>
                                    <Link to={`/anuncios/borrar/${advert._id}`} className='flex gap-3 items-center justify-center bg-red-500 hover:bg-red-900 transition-all p-2 text-white rounded-full'>
                                        <Trash01 size="20" />
                                        Borrar
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className='p-5'>No has publicado ningún anuncio todavía.</p>
                )}
            </div>
        </div>
    )
}

export default Account