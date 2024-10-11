import styles from "./RegistrationForm.module.css"
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(2).max(16),
    email: z.string().email(),
    year: z.string().min(4).max(4),
    phone: z.string().min(13).max(13)
})

export default function RegistrationForm({name, onFormSubmit, ...props}) {
    const {register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({resolver: zodResolver(schema)});

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(() => {
            resolve();
            onFormSubmit();
        }, 1000));

    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} {...props}>
            <h2>Форма реєстрації на {name}</h2>

            <input {...register("name")} type="text" placeholder="Name" autoComplete="off"/>
            {errors.name && (
                <div className={styles.error_message}>{errors.name.message}</div>
            )}

            <input {...register("email")} type="text" placeholder="Email" autoComplete="off"/>
            {errors.email && (
                <div className={styles.error_message}>{errors.email.message}</div>
            )}

            <input {...register("year")} type="number" placeholder="Year of birth" autoComplete="off"/>
            {errors.year && (
                <div className={styles.error_message}>{errors.year.message}</div>
            )}

            <input {...register("phone")} type="text" placeholder="Phone number" autoComplete="off"/>
            {errors.phone && (
                <div className={styles.error_message}>{errors.phone.message}</div>
            )}

            <button className="button-4" disabled={isSubmitting} type="submit">
                {isSubmitting ? "Loading..." : "Submit"}
            </button>
            {errors.root && <div className="text-red-500">{errors.root.message}</div>}
        </form>
    )
}

