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
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import useFetch from "@/hooks/useFetch";

const formSchema = z.object({
    email: z.string().min(1,
        { message: "Este campo debe ser rellenado." })
        .email("Este no es un correo electrónico válido."),
    password: z.string().min(8, {
        message: "La contraseña debe tener mínimo 8 caracteres."
    })
})

export function ProfileForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values) {
        try {
            console.log(values)
        } catch (error) {
            console.log("Error:", error)
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
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Enviar</Button>
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