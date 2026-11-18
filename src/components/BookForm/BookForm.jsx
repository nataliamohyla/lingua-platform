import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./BookForm.module.css";


const schema = yup.object({
    name: yup
        .string()
        .required("Name is required"),
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    phone: yup
        .string()
        .matches(
            /^\+?[0-9\s()-]+$/,
            "Enter a valid phone number"
        )
        .test( "phone-length", "Phone number must contain at least 9 digits", (value) => (value?.replace(/\D/g, "").length ?? 0) >= 9)
        .required("Phone number is required"),
    reason: yup
        .string()
    .required("Please select your reason"),
});


function BookForm({ teacher, onClose }) {
    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = (data) => {
    console.log("Booking data:", data);
    console.log("Select teacher:", teacher);
    onClose();
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
            <div className={styles.content}>
                <h2>Book trial lesson</h2>
                <p>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>

            </div>  
            <div className={styles.teacher}>
                <img className={styles.img} src={teacher.avatar_url} alt={`${teacher.surname}`} />
                <div>
                    <p>Your teacher</p>
                    <h4>{teacher.name} { teacher.surname}</h4>
                </div>
            </div>
            <div className={styles.reason}>
                <h3>What is your main reason for learning English?</h3>
                <label>
                    <input type="radio" value="Career and business"{...register("reason")} />
                    Career and business
                </label>
                <label>
                    <input type="radio" value="Lesson for kids"{...register("reason")} />
                    Lesson for kids
                </label>
                <label>
                    <input type="radio" value="Living abroad"{...register("reason")} />
                     Living abroad
                </label>
                <label>
                   <input type="radio" value="Exams and coursework" {...register("reason")} />
                    Exams and coursework
                </label>
                <label> 
                   <input type="radio"  value="Culture, travel or hobby" {...register("reason")}/>
                   Culture, travel or hobby
                </label>
               {errors.reason && ( <p className={styles.error}>{errors.reason.message}</p> )}
            </div>
            <input type="text" className={styles.input} {...register("name")} placeholder="Name" />
            <div>
            {errors.name && (
                <p className={styles.error}> { errors.name.message}</p>
            )}
            </div>
             <input type="email" className={styles.input} {...register("email")} placeholder="Email" />
            <div>
            {errors.name && (
                <p className={styles.error}> { errors.email.message}</p>
            )}
            </div>
             <input type="tel" className={styles.input} {...register("phone")} placeholder="Phone" />
            <div>
            {errors.name && (
                <p className={styles.error}> { errors.phone.message}</p>
            )}
            </div>
            <button type="submit" className={styles.button}>Book Lesson</button>

        </form>
    )
};
export default BookForm;