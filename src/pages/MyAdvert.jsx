import { getRequestById } from '@/api/adverts.api'
import useFetch from '@/hooks/useFetch'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { zoomies } from 'ldrs'

const MyAdvert = () => {
    const [advert, setAdvert] = useState(null)
    const { fn: GetAdvert, loading } = useFetch(getRequestById)
    let { id } = useParams()
    zoomies.register()

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

    if (loading || !advert)
        return (
            <l-zoomies
                size="80"
                stroke="5"
                bg-opacity="0.1"
                speed="1.4"
                color="black"
            />
        )

    return (
        <div>
            <h1>{advert.title}</h1>
        </div>
    )
}

export default MyAdvert