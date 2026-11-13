import { createUserWithEmailAndPassword, getAuth, updateProfile ,signInWithEmailAndPassword, signOut} from "firebase/auth";
import { app } from "./config";

export const auth = getAuth(app);

export  const registerUser = async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, {
        displayName: name,
    });
    return userCredential.user;
};

export const loginUser = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};
 
export const logoutUser = async () => {
    await signOut(auth);
};

export default registerUser;
