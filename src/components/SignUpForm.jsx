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
import parsePhoneNumber from "libphonenumber-js";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import useFetch from "@/hooks/useFetch";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useAuth } from '@/context/AuthContext';

const formSchema = z.object({
    name: z.string().min(3, {
        message: "El nombre debe tener mínimo 3 caracteres.",
    }),
    dateOfBirth: z.string(),
    phone: z.string().min(1,
        { message: "Este campo debe ser rellenado." })
        .transform((value, ctx) => {
            const phoneNumber = parsePhoneNumber(value, {
                defaultCountry: "UY",
            });

            if (!phoneNumber?.isValid()) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Este no es un número de teléfono válido.",
                });
                return z.NEVER;
            }
            return value
        }),
    email: z.string().min(1,
        { message: "Este campo debe ser rellenado." })
        .email("Este no es un correo electrónico válido."),
    password: z.string().min(8, {
        message: "La contraseña debe tener mínimo 8 caracteres."
    })
})

export function ProfileForm() {
    const { register } = useAuth()
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            password: "",
            dateOfBirth: ""
        },
    });

    const { fn: PostUser, loading } = useFetch(register)

    async function onSubmit(values) {
        try {
            const res = await PostUser(values)
            if (!res || res.error) {
                throw new Error(res?.error || 'Ups, algo salió mal al intentar registrar tu cuenta. ¡Inténtalo de nuevo!');
            }

            if (res.data) {
                toast.success("¡Bienvenido! Tu cuenta ha sido registrada con éxito. Te redirigiremos para que puedas iniciar sesión.");
                navigate("/inicio-sesion");
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
                <div className="flex flex-col lg:flex-row gap-10">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Este es el nombre público que se va a mostrar en tu perfil.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fecha de nacimiento</FormLabel>
                                <FormControl>
                                    <Input type="date" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Esta fecha la utlizamos para conocer si eres mayor de edad.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Teléfono</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription className="max-w-md">
                                Este es el número de teléfono asociado a tu cuenta, el mismo no es público (se usará para que puedan contactarse contigo).
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Correo electrónico</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                Este es el correo electrónico asociado a tu cuenta.
                            </FormDescription>
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
                            <FormDescription>
                                Esta es la contraseña asociada al correo electrónico, no la olvides!
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={loading}>{loading ? "Cargando..." : "Enviar"}</Button>
            </form>
        </Form>
    );
}

const SignUpForm = () => {
    return (
        <div className="mt-10">
            <ProfileForm />
        </div>
    )
}

export default SignUpForm