import styles from "./HomePage.module.css";
import { useNavigate } from "react-router";

const HomePage = () => { 
    const navigate = useNavigate();
    return (
        <main className={styles.homepage}>
            <div className={styles.content}>
            <div className={styles.block}>
                <h1 className={styles.headline}>Unlock your potential with the best <span className={styles.word}>language</span> tutors</h1>
                <p className={styles.text}>Embark on an Exciting Language Journey with Expert Language Tutors:Elevate your Language proficienty to new heights by connecting with highly qualified end experienced tutors</p>
                  <button type="button" className={styles.button} onClick={() => navigate('/teachers')}>Go started</button>
                </div>
                <img className={styles.imagen} src="/images/block.svg" alt="avatar" />
                
                </div>
           
            <ul className={styles.list}>
                <li className={styles.item}>
                    <h2>32,000 +</h2>
                    <p className={styles.itemtext}>Experienced tutors</p>
                </li>
                <li className={styles.item}>
                      <h2>300,000 +</h2>
                    <p className={styles.itemtext}>5-star tutor reviews</p>
                </li>
                <li className={styles.item}>
                      <h2>120 +</h2>
                    <p className={styles.itemtext}>Subjects taught </p>
                </li>
                <li className={styles.item}>
                      <h2>200 +</h2>
                    <p className={styles.itemtext}>Tutor nationalities</p>
                </li>
            </ul>
        </main>
    )
};
export default HomePage;