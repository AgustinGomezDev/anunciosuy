import React from 'react'
import { Link } from 'react-router-dom'

const AdvertCard = ({id, title, description}) => {
    return (
        <Link className="relative transition hover:scale-105 hover:bg-gray-100 flex w-80 h-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div  className="bg-[url('https://flowbite.com/docs/images/examples/image-1@2x.jpg')] bg-center bg-contain bg-no-repeat relative mx-4 -mt-4 min-h-40 max-h-40  overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/400" />
            <div className="p-6 overflow-hidden">
                <h5 className="mb-2 block text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{title}</h5>
                <p className="font-light">{description}</p>
            </div>
        </Link>
    )
}

export default AdvertCard