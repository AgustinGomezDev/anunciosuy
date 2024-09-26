import React from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import useFetch from "@/hooks/useFetch";
import { useNavigate } from "react-router-dom";;
import toast from 'react-hot-toast';
import { useAuth } from '@/context/AuthContext';

const formSchema = z.object({
    email: z.string().min(1,
        { message: "Este campo debe ser rellenado." })
        .email("Este no es un correo electrónico válido."),
    password: z.string().min(8, {
        message: "La contraseña debe tener mínimo 8 caracteres."
    })
})

export function ProfileForm() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { fn: LoginUser, loading } = useFetch(login)

    async function onSubmit(values) {
        try {
            const res = await LoginUser(values)
            if (!res || res.error) {
                throw new Error(res?.error || 'Ups, algo salió mal al intentar iniciar sesión. ¡Inténtalo de nuevo!');
            }

            if (res.data) {
                toast.success("Sesión iniciada, te redirigiremos al inicio.");
                setTimeout(() => {
                    navigate("/");
                }, 2000)
            } else {
                throw new Error("Parece que hubo un problema con la respuesta del servidor. Estamos trabajando para solucionarlo.");
            }
        } catch (error) {
            toast.error(error.message.split("Error: Error:")[1] || "Lo sentimos, ha ocurrido un error inesperado. ¡Intenta más tarde!");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Correo electrónico</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={loading}>{loading ? "Cargando..." : "Enviar"}</Button>
            </form>
        </Form>
    )
}
const SignInForm = () => {
    return (
        <div className="mt-10">
            <ProfileForm />
        </div>
    )
}

export default SignInForm