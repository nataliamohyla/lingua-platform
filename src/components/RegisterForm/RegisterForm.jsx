import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import registerUser from "../../firebase/auth";
import { error } from "console";

const schema = yup.object({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

function AuthForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data) => {
        try {
            const user = await registerUser(data.email, data.password);
            console.log(user);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Email
                <input type="email" {...register("email")} />
            </label>
            {errors.email && <p>{errors.email.message}</p>}
            <label>
                Password
                <input type="password" {...register("password")} />
            </label>
            {errors.password && <p>{errors.password.message}</p>}
            <button type="submit" ><Register></Register></button>
        </form>
    );
};
export default AuthForm;