import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import registerUser from "../../firebase/auth";
import style from "./RegisterForm.module.css";


const schema = yup.object({
     name: yup
        .string()
        .required("Name is required"),
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data) => {
        try {
            const user = await registerUser(data.name, data.email, data.password);
            console.log(user);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form} noValidate>
            <div className={style.content}>
                <h2>Registration</h2>
                <p> Thank you for your interest in our platform! In order to register,
                    we need some information.
                    Please provide us with the following information</p>
            </div>
                <input type="text" {...register("name")} className={ style.input} placeholder="Name" />
             <div className={style.errorContainer}>
                {errors.name && (
                 <p className={style.error}>{errors.name.message}</p> )}
             </div>
                <input type="email" {...register("email")} className={ style.input}  placeholder="Email"/>
              <div className={style.errorContainer}>
                {errors.email && (
                 <p className={style.error}>{errors.email.message}</p>)}
             </div>
                <input type="password" {...register("password")} className={ style.input} placeholder="Password"/>
            <div className={style.errorContainer}>
                 {errors.password && (
                 <p className={style.error}>{errors.password.message}</p>)}
            </div>
            <button type="submit" className={style.button} >Sin gUp</button>
        </form>
    );
};
export default RegisterForm;