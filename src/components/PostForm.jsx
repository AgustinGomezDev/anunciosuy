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
                message: "Not a number",
            });
            return z.NEVER;
        }
        return parsed;
    })
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
            price: 0
        },
    });

    const { fn: PostAdvert, loading } = useFetch(postRequest)

    async function onSubmit(values) {
        try {
            const res = await PostAdvert(values)
            if (!res || res.error) {
                throw new Error(res?.error || 'Ups, algo salió mal al intentar registrar tu cuenta. ¡Inténtalo de nuevo!');
            }

            if (res.data.data.advert) {
                toast.success("¡Anuncio publicado con éxito!");
                if(!loading){
                    navigate(`/publicar/mi-anuncio/${res.data.data.advert._id}`)
                }
            }

        } catch (error) {
            toast.error(error.message.split("Error: Error:")[1] || "Lo sentimos, ha ocurrido un error inesperado. ¡Intenta más tarde!");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-10 px-40">
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
                <div className='flex flex-col md:flex-row md:justify-center gap-10'>
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
                                <Input type="number" {...field} />
                            </FormControl>
                            <FormDescription>
                                Este es el precio que se va a mostrar en tu anuncio.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={loading}>{loading ? "Cargando..." : "Publicar"}</Button>
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