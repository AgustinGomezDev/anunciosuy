import React from 'react'
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
import { Input } from '@/components/ui/input'
import { SearchMD } from "untitledui-js-base"
import locationData from "../data/location.json"
import categoryData from "../data/category.json"
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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
]

const SearchForm = () => {
    const navigate = useNavigate()
    const form = useForm({
        defaultValues: {
            title: "",
            category: "",
            location: "",
        },
    });

    async function onSubmit(values) {
        try {
            navigate(`/anuncios?query=${values.title}&category=${values.category}&location=${values.location}`)
        } catch (error) {
            toast.error("Lo sentimos, ha ocurrido un error inesperado.");
        }
    }

    const sortedCategories = categoryData.sort((a, b) => a.name.localeCompare(b.name))

    return (
        <div className='md:p-6 flex justify-center items-center'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col md:flex-row items-center'>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <Input
                                    {...field}
                                    className="h-10 w-60 md:w-96 border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm md:text-md px-5"
                                    placeholder={`${placeholders[Math.floor(Math.random() * placeholders.length)]}`}
                                />
                            </FormItem>
                        )}
                    />
                    <div className='flex'>
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0 w-32">
                                            <SelectValue placeholder="Categoría" />
                                        </SelectTrigger>
                                        <SelectContent>
                                        {sortedCategories.map(({ id, name }) => {
                                                return (
                                                    <SelectItem key={id} value={name}>
                                                        {name}
                                                    </SelectItem>
                                                );
                                            })}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className="focus-visible:ring-0 focus-visible:ring-offset-0 w-32">
                                            <SelectValue placeholder="Ubicación" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {locationData.map(({ id, name }) => {
                                                return (
                                                    <SelectItem key={id} value={name}>
                                                        {name}
                                                    </SelectItem>
                                                );
                                            })}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                    </div>

                    <button type='submit' className='flex items-center gap-2 md:w-6 md:-translate-x-1 bg-blue-500 hover:bg-blue-900 transition-colors text-white px-3 mt-2 md:mt-0 box-content rounded-full md:rounded-l-none'>
                        <SearchMD size="24" className='h-10 w-4' />
                        <p className='block md:hidden'>Buscar</p>
                    </button>
                </form>
            </Form>
        </div>
    )
}

export default SearchForm 