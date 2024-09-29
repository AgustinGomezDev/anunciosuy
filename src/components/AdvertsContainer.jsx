import { getRequest } from '@/api/adverts.api'
import useFetch from '@/hooks/useFetch'
import React, { useState, useEffect } from 'react'
import { zoomies } from 'ldrs'
import { useSearchParams } from 'react-router-dom';
import AdvertCard from './AdvertCard';

const AdvertsContainer = () => {
    const [adverts, setAdverts] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    const [searchParams] = useSearchParams()
    const { fn: GetAdverts, loading } = useFetch(getRequest)
    zoomies.register()

    useEffect(() => {
        const fetchAdverts = async () => {
            const limit = searchParams.get('limit') || undefined
            const category = searchParams.get('category') || undefined
            const location = searchParams.get('location') || undefined
            const query = searchParams.get('query') || undefined

            try {
                const res = await GetAdverts({ limit, category, location, query })
                if (res.data.data.adverts.length > 0) {
                    setAdverts(res.data.data.adverts)
                    setErrorMessage(null)
                }
            } catch (error) {
                setErrorMessage('Lo sentimos, no se encontraron anuncios para tu búsqueda.')
            }
        }
        fetchAdverts()
    }, [searchParams])

    if (loading) return (
        <l-zoomies
            size="80"
            stroke="5"
            bg-opacity="0.1"
            speed="1.4"
            color="black"
        />
    )

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto'>{errorMessage ? (
            <p>{errorMessage}</p>
        ) : (
            adverts.map(advert => (
                <AdvertCard key={advert._id} id={advert._id} title={advert.title} description={advert.description} location={advert.location} price={advert.price} createdAt={advert.createdAt} category={advert.category} />
            ))
        )}</div>
    )
}

export default AdvertsContainer