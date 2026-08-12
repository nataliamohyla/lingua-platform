import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./config";

export const auth = getAuth(app);
export  const registerUser = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};
export default registerUser;