import { getRequestById } from '@/api/adverts.api'
import useFetch from '@/hooks/useFetch'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MyAdvert = () => {
    const [advert, setAdvert] = useState(null)
    const { fn: GetAdvert, loading } = useFetch(getRequestById)
    let { id } = useParams()

    useEffect(() => {
        const fetchAdvert = async () => {
            try {
                const res = await GetAdvert(id)
                setAdvert(res.data.data.advert)
            } catch (error) {
                console.error('Error buscando el anuncio:', error);
            }
        };
        fetchAdvert()
    }, [id])

    if (loading || !advert) return <p>Cargando...</p>

    return (
        <div>
            <h1>{advert.title}</h1>
        </div>
    )
}

export default MyAdvert