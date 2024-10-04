import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import toast from 'react-hot-toast';
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from '@/context/AuthContext';
import { getRequestById, updateAdvert } from '@/api/adverts.api';
import { Textarea } from '@/components/ui//textarea';
import locationData from "../data/location.json";
import categoryData from "../data/category.json";
import { uploadImage } from '@/firebase/upload';

const formSchema = z.object({
    title: z.string().min(5, {
        message: "El título debe tener mínimo 5 caracteres."
    }),
    description: z.string().min(20, {
        message: "La descripción debe tener mínimo 20 caracteres."
    }).max(1000, { message: "La descripción no debe exceder los 1000 caracteres." }),
    category: z.string().min(1, {
        message: "Este campo debe ser rellenado."
    }),
    location: z.string().min(1, {
        message: "Este campo debe ser rellenado."
    }),
    price: z.string().transform((value, ctx) => {
        const parsed = parseInt(value);

        if (isNaN(parsed)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Lo que has ingresado no es un número",
            });
            return z.NEVER;
        }
        return parsed;
    }),
    images: z.instanceof(FileList).optional().nullable()
});

const EditAdvert = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();

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

    const { fn: GetAdvertById, loading: loadingAdvert } = useFetch(getRequestById);
    const { fn: UpdateAdvert, loading: loadingUpdate } = useFetch(updateAdvert);

    useEffect(() => {
        const fetchAdvert = async () => {
            try {
                const res = await GetAdvertById(id);
                const advert = res.data.data.advert;

                form.reset({
                    title: advert.title,
                    description: advert.description,
                    category: advert.category,
                    location: advert.location,
                    price: advert.price.toString(),
                    images: null
                });
            } catch (error) {
                toast.error("Error al cargar el anuncio.");
            }
        };

        fetchAdvert();
    }, [id]);

    async function onSubmit(values) {
        console.log(values.description)
        try {
            let imageUrls = [];

            if (values.images?.length > 0) {
                const imageUploadPromises = Array.from(values.images).map(image => uploadImage(image));
                imageUrls = await Promise.all(imageUploadPromises);
            }

            const updatedAdvertData = {
                ...values,
                images: imageUrls.length ? imageUrls : undefined
            };

            const res = await UpdateAdvert(id, updatedAdvertData);
            if (!res || res.error) {
                throw new Error(res?.error || 'Error actualizando el anuncio.');
            }

            toast.success("¡Anuncio actualizado con éxito!");
            navigate(`/anuncios/${id}`);

        } catch (error) {
            toast.error(error.message || "Lo sentimos, ha ocurrido un error inesperado.");
        }
    }

    const sortedCategories = categoryData.sort((a, b) => a.name.localeCompare(b.name));

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
                                <Textarea className="resize-none w-full h-52"  {...field} />
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
                            <FormLabel>Imágenes (solo selecciona si deseas actualizar)</FormLabel>
                            <FormControl>
                                <Input type="file" multiple {...imagesRef} />
                            </FormControl>
                            <FormDescription>
                                Estas van a ser las imágenes que se van a mostrar en tu anuncio <span className='underline'>(si subes alguna imagén se quitarán las anteriores)</span>.
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
                                        {sortedCategories.map(({ id, name }) => (
                                            <SelectItem key={id} value={name}>
                                                {name}
                                            </SelectItem>
                                        ))}
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
                                        {locationData.map(({ id, name }) => (
                                            <SelectItem key={id} value={name}>
                                                {name}
                                            </SelectItem>
                                        ))}
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
                <Button type="submit" variant="primary" disabled={loadingAdvert || loadingUpdate}>
                    {loadingAdvert || loadingUpdate ? "Cargando..." : "Guardar cambios"}
                </Button>
                <Button type="button" onClick={() => navigate(-1)} variant="secondary">
                    Cancelar
                </Button>
            </form>
        </Form>
    );
};

export default EditAdvert;
