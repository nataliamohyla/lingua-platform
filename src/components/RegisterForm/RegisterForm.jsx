import { useState } from "react";
import registerUser from "../../firebase/auth";
import { Formik } from "formik";

function RegisterForm() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

}