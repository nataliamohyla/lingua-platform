import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { app } from "./config";

export const auth = getAuth(app);
export  const registerUser = async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, {
        displayName: name,
    });
    return userCredential.user;
};
export default registerUser;