import { useAuth } from "../../context/AuthContext";
import styles from "./UserPage.module.css";
import { useFavorites } from "../../context/FavoritesContext";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import { useNavigate } from "react-router";

function UserPage() {
    const { favorites } = useFavorites();
    const navigate = useNavigate();
   

    return (
        <main>
        <div>
            <h3>Your Favorites</h3>
            {favorites.length === 0 ? (
                <>
                <p>You don't have any favorite teacher yet.</p>
                    <button type="button" onClick={() => navigate("/teachers")} className={styles.button}  >Find a teacher</button>
                    </>
            ) : (
                    <div>
                        {favorites.map((teacher) => (
                            <TeacherCard key={teacher.id}
                            teacher={teacher} />
                      ))}
                    </div>
            )}
            </div>
            </main>
    );
};

export default UserPage;