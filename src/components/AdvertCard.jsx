import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, MarkerPin01 } from "untitledui-js-base"
import { timeSince } from '@/utils/timeSince';
import { formatPrice } from '@/utils/formatPrice';

const AdvertCard = ({ id, image, title, description, createdAt, location, price, category }) => {
    return (
        <Link id={id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-4 transition relative h-96 w-[15rem] 2xl:w-80" to={`/anuncios/${id}`}>
            <img
                src={image}
                alt={`Imagén de ${title}`}
                className="w-full object-cover object-center h-40"
                loading='lazy'
            />
            <div className="p-4 border-t h-full">
                <div className=''>
                    <div>
                        <h3 className="font-medium text-lg mb-2">{title}</h3>
                        <div className="flex items-center text-2xl font-bold text-[#3b82f6] mb-2">
                            <span>{formatPrice(price) === '0' ? '' : `$${formatPrice(price)}`}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{timeSince(createdAt)}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                            <MarkerPin01 className="w-4 h-4 mr-1" />
                            <span>{location}</span>
                        </div>
                    </div>
                </div>
                <span className="inline-block bg-gray-200/50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 absolute top-0 right-0 m-3">
                    {category}
                </span>
            </div>
        </Link>
    )
}

export default AdvertCard