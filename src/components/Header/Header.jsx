import { NavLink } from "react-router";

import styles from "./Header.module.css";

import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { logoutUser } from "../../firebase/auth";


const Header = ({ openLoginModal, openRegisterModal }) => {
    const navigate = useNavigate();
    const { user, loading } = useAuth();
  ''
     const handleLogout = async () => {
        try {
            await logoutUser();
            navigate("/");
        } catch (error) {
            console.error(error);
        }
        
    };
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
                {!user ? (
                    <>
                     <button type="button" className={styles.login} onClick={openLoginModal}>LogIn
                            <img src="/public/images/log-in-01.png" alt="Login" className={styles.icon} /></button> 
                    <button type="button" className={styles.button} onClick={openRegisterModal}>Registration</button>    
                    </>
                ) : (
                        < >
                            <div className={styles.usernav}>
                            <h4>Hello, {user.displayName}</h4>
                            <nav className={styles.nav}>
                                <NavLink to='/user' className={({ isActive }) => isActive ? styles.active : ''}>Favorite</NavLink>
                            </nav>
                              </div>
                                <button type="button" onClick={handleLogout} className={styles.button}>Log Out</button>
                              
                        </>
                )
            }
  
            </div>
          
        </header>
    );
};
export default Header;