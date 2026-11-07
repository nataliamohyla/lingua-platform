import { NavLink } from "react-router";
import ukraine from "../../../public/images/ukraine (2).svg";
import styles from './Header.module.css';
import { useState } from "react";
import AuthModal from "../AuthModal/AuthModal"; 
import RegisterForm from "../RegisterForm/RegisterForm";

const Header = () => {
   
    const [isRegisterlOpen, setIsRegisterOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src='/public/images/ukraine (2).svg' alt="Logo" className={styles.ukraine} />
                <img src="/public/images/LearnLingo.svg" alt="Learnlingo" className={styles.lingo} />
            </div>
            <nav className={styles.nav}>
                <NavLink to='/' className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
                <NavLink to='/teachers' className={({ isActive }) => isActive ? styles.active : ''}>Teachers</NavLink>
            </nav>
            <div className={styles.blockbutton}>
                <button type="button" className={styles.login} onClick={() => setIsModalOpen(true)}>LogIn
                    <img src="/public/images/log-in-01.png" alt="Login" className={styles.icon } /></button>
                <button type="button" className={styles.button} onClick={() => setIsRegisterOpen(true)}>Registration</button>
                
            </div>
            {isRegisterlOpen && (
                <AuthModal onClose={() => setIsRegisterOpen(false)}>
                    <RegisterForm/>
                </AuthModal>
         )};
        </header>
    );
};
export default Header;