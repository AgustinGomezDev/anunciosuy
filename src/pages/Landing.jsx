import { Input } from '@/components/ui/input'
import React from 'react'
import { SearchMD } from "untitledui-js-base"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"

const placeholders = [
    "Servicio de marketing",
    "Servicio de peluquería a domicilio",
    "Autos eléctricos",
    "Casas en Rocha",
    "Trabajo primera experiencia",
    "Computadoras",
    "Asesoría legal",
    "Veterinarias",
    "Profesor particular",
    "Servicio de plomería",
    "Clases de guitarra",
    "Alquiler de apartamentos en Montevideo",
    "Vendedores de ropa por mayor",
    "Mecánico a domicilio",
    "Cuidado de ancianos",
    "Servicio de catering para eventos",
    "Servicio de fotografía y video",
    "Electricista certificado",
    "Guarderías para niños",
    "Servicio de mudanzas",
    "Contadores y asesoría financiera",
    "Reparación de electrodomésticos",
    "Clases de inglés a domicilio",
    "Ofertas de trabajo remoto",
    "Venta de bicicletas",
    "Pintores de casas y oficinas",
    "Jardinería y mantenimiento de espacios verdes",
    "Servicio de transporte escolar",
    "Servicio de diseño gráfico",
    "Mascotas en adopción",
    "Compra y venta de terrenos",
    "Cuidado de mascotas",
    "Clases de yoga y meditación",
    "Servicio de desarrollo web",
    "Fletes y transporte de cargas",
    "Servicio de limpieza para oficinas",
    "Técnico de celulares y tablets",
    "Alquiler de locales comerciales",
    "Músicos para eventos",
    "Tatuadores y estudios de tatuajes",
    "Reparación de bicicletas",
    "Servicio de cerrajería",
    "Clases de repostería",
    "Psicólogos y terapia en línea",
    "Venta de muebles usados",
    "Reparación de techos y filtraciones",
    "Mudanzas nacionales e internacionales",
    "Servicio de pintura automotriz",
    "Diseñadores de interiores"
];
const Landing = () => {
    return (
        <div>
            <div >
                <section className='flex flex-col items-center justify-center container'>
                    <h1 className='text-center text-4xl sm:text-4xl lg:text-6xl font-extrabold tracking-tighter mt-20'>¿Qué estás <span className='text-blue-500'>buscando</span>?</h1>
                    <div className='bg-background border border-input rounded-full h-16 w-80 md:w-1/2 px-4 md:p-6 shadow-xl flex justify-center items-center mt-4 md:mt-7'>
                        <Input className="h-10 rounded-l-2xl border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm md:text-md" placeholder={`Ej: ${placeholders[Math.floor(Math.random() * placeholders.length)]}`} />
                        <button type='submit'>
                            <SearchMD size="24" className='h-10 w-4 md:w-6 bg-blue-500 hover:bg-blue-900 transition-colors text-white px-3 box-content rounded-r-2xl' />
                        </button>
                    </div>
                </section>
                <section className='mt-7'>
                    <div>
                        {/* ULTIMOS ANUNCIOS */}
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <p>250.377 anuncios</p>
                        <span className='w-[2px] h-8 bg-gray-300 rounded-full'></span>
                        <p>1.899 publicados hoy</p>
                    </div>
                </section>
                <section className='mt-7  md:mx-20'>
                    <h3 className='text-lg md:text-2xl font-medium'>Categorías más populares</h3>
                    <div className='grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-5 mt-3'>
                        <div className="bg-[#eff4ff] flex items-center gap-5">
                            <div>
                                <SearchMD size="24" className='w-[4.5rem] h-[4.5rem] bg-[#3B76F6] p-3 rounded-xl' />
                            </div>
                            <div>
                                <p className="font-medium text-lg">Marketing</p>
                                <p className="text-md text-neutral-600">3.741 anuncios</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Landing