import AdvertsContainer from '@/components/AdvertsContainer'
import SearchForm from '@/components/SearchForm'
import React from 'react'

const Adverts = () => {
    return (
        <div className='py-10 container mx-auto'>
            <div>
                <SearchForm />
            </div>
            <div className='flex items-center justify-center px-5'>
                <AdvertsContainer />
            </div>
        </div>
    )
}

export default Adverts