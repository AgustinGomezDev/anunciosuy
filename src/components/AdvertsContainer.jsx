import { getRequest } from '@/api/adverts.api'
import useFetch from '@/hooks/useFetch'
import React, { useState, useEffect } from 'react'
import { zoomies } from 'ldrs'
import { useNavigate, useSearchParams } from 'react-router-dom';
import AdvertCard from './AdvertCard';
import { Button } from './ui/button';

const AdvertsContainer = () => {
    const [adverts, setAdverts] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    const [searchParams] = useSearchParams()
    const { fn: GetAdverts, loading } = useFetch(getRequest)
    const navigate = useNavigate()
    zoomies.register()

    useEffect(() => {
        const fetchAdverts = async () => {
            const limit = searchParams.get('limit') || undefined
            const category = searchParams.get('category') || undefined
            const location = searchParams.get('location') || undefined
            const query = searchParams.get('query') || undefined
            const sortBy = searchParams.get('sortBy') || undefined
            const sortOrder = searchParams.get('sortOrder') || undefined

            try {
                const res = await GetAdverts({ limit, category, location, query, sortBy, sortOrder })
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

    const handlePriceSort = (sortBy, sortOrder) => {
        searchParams.set('sortBy', sortBy);
        searchParams.set('sortOrder', sortOrder);
        navigate({ search: searchParams.toString() });
    }

    const clearFilters = () => {
        searchParams.delete('limit');
        searchParams.delete('category');
        searchParams.delete('location');
        searchParams.delete('query');
        searchParams.delete('sortBy');
        searchParams.delete('sortOrder');

        navigate({ search: searchParams.toString() });
    }


    if (loading) return (
        <div className='w-full flex justify-center items-center mt-5 md:mt-0'>
            <l-zoomies
                size="80"
                stroke="5"
                bg-opacity="0.1"
                speed="1.4"
                color="black"
            />
        </div>

    )

    return (
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-3 w-full mt-5 md:mt-0'>
                <Button onClick={() => handlePriceSort('price', 'asc')} variant={`${searchParams.get('sortOrder') === 'asc' && searchParams.get('sortBy') === 'price' ? 'primary' : 'outline'}`}>Precio más bajo</Button>
                <Button onClick={() => handlePriceSort('price', 'desc')} variant={`${searchParams.get('sortOrder') === 'desc' && searchParams.get('sortBy') === 'price' ? 'primary' : 'outline'}`}>Precio más alto</Button>
                <Button onClick={() => handlePriceSort('createdAt', 'desc')} variant={`${searchParams.get('sortOrder') === 'desc' && searchParams.get('sortBy') === 'createdAt' ? 'primary' : 'outline'}`}>Novedad</Button>
                <Button onClick={() => clearFilters()} variant='destructive'>Borrar filtros</Button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto'>{errorMessage ? (
                <p>{errorMessage}</p>
            ) : (
                adverts.map(advert => (
                    <AdvertCard key={advert._id} id={advert._id} title={advert.title} description={advert.description} location={advert.location} price={advert.price} createdAt={advert.createdAt} category={advert.category} image={advert.images[0]} />
                ))
            )}</div>
        </div>
    )
}

export default AdvertsContainer