import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, MarkerPin01 } from "untitledui-js-base"

const timeSince = (dateString) => {
    const now = new Date();
    const pastDate = new Date(dateString);
    const diffInMs = now - pastDate;

    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) return `Hace ${years} años`;
    if (months > 0) return `Hace ${months} meses`;
    if (days > 0) return `Hace ${days} días`;
    if (hours > 0) return `Hace ${hours} horas`;
    if (minutes > 0) return `Hace ${minutes} minutos`;
    return `${seconds} segundos`;
};

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const AdvertCard = ({ id, image, title, description, createdAt, location, price, category }) => {
    return (
        <Link id={id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-4 transition relative h-96 w-[15rem] 2xl:w-80" to={`/anuncios/${id}`}>
            <img
                src={image}
                alt={title}
                className="w-full h-48"
            />
            <div className="p-4 border-t h-full">
                <div className=''>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">{title}</h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{timeSince(createdAt)}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                            <MarkerPin01 className="w-4 h-4 mr-1" />
                            <span>{location}</span>
                        </div>
                    </div>
                    <div className="flex items-center text-xl font-bold text-[#3b82f6] mb-2">
                        {/* <DollarSign className="w-4 h-4 mr-1" /> */}
                        <span>{ formatPrice(price) === '0' ? '' : `$${formatPrice(price)}` }</span>
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