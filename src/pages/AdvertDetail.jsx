import { getRequestById } from '@/api/adverts.api'
import useFetch from '@/hooks/useFetch'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { zoomies } from 'ldrs'
import { Clock, MarkerPin01, ArrowLeft } from "untitledui-js-base"
import { timeSince } from '@/utils/timeSince'
import { formatPrice } from '@/utils/formatPrice'
import { useNavigate } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button'
import WhatsAppIcon from '@/components/icons/Whatsapp'
import { getUserById } from '@/api/users.api'

const AdvertDetail = () => {
  const [advert, setAdvert] = useState(null)
  const [advertUser, setAdvertUser] = useState(null)
  const { fn: GetAdvert, loading } = useFetch(getRequestById)
  const { fn: GetAdvertUser } = useFetch(getUserById)
  let { id } = useParams()
  const navigate = useNavigate()
  zoomies.register()

  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const res = await GetAdvert(id)
        setAdvert(res.data.data.advert)
      } catch (error) {
        console.error('Error buscando el anuncio:', error)
      }
    }

    fetchAdvert()
  }, [id])

  useEffect(() => {
    const fetchAdvertUser = async () => {
      if (advert?.userId) {
        try {
          const res = await GetAdvertUser(advert.userId)
          setAdvertUser(res.data.data.user)
        } catch (error) {
          console.error('Error obteniendo el usuario:', error)
        }
      }
    }

    fetchAdvertUser()
  }, [advert])

  const getPhoneNumber = () => {
    if (!advertUser || !advertUser.phone) {
      return null
    }

    let phoneNumber = advertUser.phone
    if (!phoneNumber.startsWith('+598')) {
      phoneNumber = `+598${phoneNumber}`
    }

    return phoneNumber
  }

  const phoneNumber = getPhoneNumber()

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
    <div className='container mx-auto py-5 min-h-screen px-5'>
      <div className='inline-block mb-3 group' onClick={() => navigate(-1)}>
        <div className='flex gap-1 items-center'>
          <ArrowLeft size="24" className='group-hover:-translate-x-2 transition-all' />
          <span className='font-medium cursor-pointer'>Atrás</span>
        </div>
      </div>
      <div className='flex flex-col gap-5 md:flex-row'>
        <div>

          <Carousel className="w-[30rem] md:w-[40rem]" opts={{ loop: true }}>
            <CarouselContent>
              {advert.images.map((image) => (
                <CarouselItem key={image}>
                  <img alt={`Imagén de ${advert.title}`} className='w-[40rem]' loading='lazy' src={image} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        </div>
        <div>
          <h3 className='text-2xl font-bold'>{advert.title}</h3>
          <p className='text-2xl font-bold text-[#3b82f6]'>{formatPrice(advert.price) === '0' ? '' : `$${formatPrice(advert.price)}`}</p>
          <div className='flex gap-5 items-center text-gray-500 '>
            <div className='flex items-center gap-1'>
              <Clock className="w-4 h-4 mr-1" />
              <span>{`${advert.createdAt.split('T')[0].split('-')[2]}/${advert.createdAt.split('T')[0].split('-')[1]}/${advert.createdAt.split('T')[0].split('-')[0]}`} {timeSince(advert.createdAt)}</span>
            </div>
            <div className='flex items-center gap-1'>
              <MarkerPin01 className="w-4 h-4" />
              <span>{advert.location}</span>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
            {phoneNumber ? (
              <Link to={`https://wa.me/${phoneNumber}`} target='_blank'>
                <Button variant="wpp" className="my-4 flex gap-2 items-center">
                  Contactar por WhatsApp
                  <WhatsAppIcon className="w-5 h-5" />
                </Button>
              </Link>
            ) : (
              <p>Cargando número de contacto...</p>
            )}
          </div>
          <hr className='my-1' />
          <p className='text-md text-gray-700 max-w-xl'>{advert.description}</p>
        </div>
      </div>
    </div>
  )
}

export default AdvertDetail