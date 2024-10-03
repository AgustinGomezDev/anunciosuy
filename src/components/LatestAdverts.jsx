import { getRequest } from '@/api/adverts.api'
import useFetch from '@/hooks/useFetch'
import React, { useEffect, useState } from 'react'
import { zoomies } from 'ldrs'
import AdvertCard from './AdvertCard'



const LatestAdverts = () => {
    const [adverts, setAdverts] = useState([])
    const { fn: GetAdverts, loading } = useFetch(getRequest)
    zoomies.register()

    useEffect(() => {
        const fetchAdverts = async () => {
            const res = await GetAdverts({ limit: 4, sortBy: 'createdAt', sortOrder: 'desc' })
            setAdverts(res.data.data.adverts)
        }

        fetchAdverts()
    }, [])




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
        <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-6 container">
            {adverts.length > 0 ?
                adverts.map((advert) => (
                    <AdvertCard
                        key={advert._id} id={advert._id}
                        title={advert.title}
                        category={advert.category}
                        location={advert.location}
                        price={advert.price}
                        createdAt={advert.createdAt}
                        image={advert.images[0]}
                    />
                ))
                : <p className='text-center col-span-full text-lg'>No hay anuncios publicados 😢</p>}
        </div>
    )
}

export default LatestAdverts