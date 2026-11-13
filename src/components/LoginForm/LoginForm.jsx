import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./LoginForm.module.css";
import { loginUser } from "../../firebase/auth";

const schema = yup.object({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    
    password: yup
        .string()
        .min(6, "Password mus be at least 6 characters")
        .required("Pasword is required"),
});
function LoginForm() {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),   
    });
    const onSubmit = async (data) => {
        try {
            const user = await loginUser(data.email, data.password);
            console.log("logged in user", user);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
            <div className={styles.content}>
                <h2>Log In</h2>
                <p>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
            </div>
            <input type="email" {...register("email")} className={styles.input} placeholder="Email" />
            <div className={styles.errorContainer}>
                {errors.email && (
                    <p className={styles.error}>{errors.email.message}</p>)}
            </div>
            
            <input type="password" {...register("password")} className={styles.input} placeholder="Password" />
            <div className={styles.errorContainer}>
                {errors.password && (
                    <p className={styles.error}>{errors.password.message}</p>)}
            </div>
            <button type="submit" className={styles.button}> Log in</button>
        </form>
    );
};
export default LoginForm;