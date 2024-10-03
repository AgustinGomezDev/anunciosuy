import React from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "./ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import useFetch from "@/hooks/useFetch";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useAuth } from '@/context/AuthContext';
import { postRequest } from '@/api/adverts.api';
import { Textarea } from './ui/textarea';
import locationData from "../data/location.json"
import categoryData from "../data/category.json"
import { uploadImage } from '@/firebase/upload';

const formSchema = z.object({
    title: z.string().min(5, {
        message: "El título debe tener mínimo 5 caracteres."
    }),
    description: z.string().min(20, {
        message: "La descripción debe tener mínimo 20 caracteres."
    }),
    category: z.string().min(1, {
        message: "Este campo debe ser rellenado."
    }),
    location: z.string().min(1, {
        message: "Este campo debe ser rellenado."
    }),
    price: z.string().transform((value, ctx) => {
        const parsed = parseInt(value)

        if (isNaN(parsed)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Lo que has ingresado no es un número",
            });
            return z.NEVER;
        }
        return parsed;
    }),
    images: z.instanceof(FileList).refine((file) => file?.length > 0, 'Debes subir al menos 1 imagén.')
})

export function ProfileForm() {
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            category: "",
            location: "",
            price: '0',
            images: ''
        },
    });

    const imagesRef = form.register("images");

    const { fn: PostAdvert, loading } = useFetch(postRequest)

    async function onSubmit(values) {
        try {
            const imageUploadPromises = Array.from(values.images).map(image => uploadImage(image));
            const imageUrls = await Promise.all(imageUploadPromises)

            const advertData = {
                ...values,
                images: imageUrls
            };

            console.log(advertData)

            const res = await PostAdvert(advertData)
            if (!res || res.error) {
                throw new Error(res?.error || 'Ups, algo salió mal al intentar registrar tu cuenta. ¡Inténtalo de nuevo!');
            }

            if (res.data.data.advert) {
                toast.success("¡Anuncio publicado con éxito!");
                if (!loading) {
                    navigate(`/anuncios/${res.data.data.advert._id}`)
                }
            }

        } catch (error) {
            toast.error(error.message.split("Error: Error:")[1] || "Lo sentimos, ha ocurrido un error inesperado. ¡Intenta más tarde!");
        }
    }

    const sortedCategories = categoryData.sort((a, b) => a.name.localeCompare(b.name))

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-10 px-5 lg:px-40">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Título</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} />
                            </FormControl>
                            <FormDescription>
                                Este es el título público que se va a mostrar en tu anuncio.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descripción</FormLabel>
                            <FormControl>
                                <Textarea className="resize-none"  {...field} />
                            </FormControl>
                            <FormDescription>
                                Esta es la descripción pública que se va a mostrar en tu anuncio.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="images"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Imagenes</FormLabel>
                            <FormControl>
                                <Input type="file" multiple {...imagesRef} />
                            </FormControl>
                            <FormDescription>
                                Estas van a ser las imagénes que se van a mostrar en tu anuncio.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='flex flex-col lg:flex-row  gap-10'>
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Categoría</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Elige una opción para la categoría" />
                                        </SelectTrigger>
                                    </FormControl>
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
                                <FormDescription>
                                    Esta es la categoría de tu anuncio.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ubicación</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Elige una opción para la ubicación" />
                                        </SelectTrigger>
                                    </FormControl>
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
                                <FormDescription>
                                    Esta es la ubicación de tu anuncio.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Precio</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                Este es el precio que se va a mostrar en tu anuncio, en caso de no tener precio dejar en 0.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" variant="primary" disabled={loading}>{loading ? "Cargando..." : "Publicar"}</Button>
            </form>
        </Form>
    )
}

const PostForm = () => {
    return (
        <div>
            <ProfileForm />
        </div>
    )
}

export default PostForm