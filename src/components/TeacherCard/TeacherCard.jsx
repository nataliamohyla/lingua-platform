import { useState } from "react";
import styles from "./TeacherCard.module.css";
import { useAuth } from "../../context/AuthContext";
import { useFavorites } from "../../context/FavoritesContext";

function TeacherCard({ teacher, openLoginModal }) {
  const { user } = useAuth();
  const { favorites, toggleFavorite } = useFavorites();
  const [isExpanded, setIsExpanded] = useState(false); 
  const isFavorite = favorites.some((item) => item.id === teacher.id);
  
  const handleFavoriteClick = () => {
    if (!user) {
      openLoginModal();
      return;
    }
    toggleFavorite(teacher);
  }

    return (
        <article className={styles.item}>
                   
                    <img
                      src={teacher.avatar_url}
                      alt={`${teacher.name} ${teacher.surname}`}
                      className={styles.img}
                    />
                    <div className={styles.content}>
                      <div className={styles.topRow}>
                        <div>
                          <p className={styles.label}>Languages</p>
                           
                          <h2 className={styles.name}>
                            {teacher.name} {teacher.surname}
                          </h2>
                        </div>
                        <div className={styles.stats}>
                          <span>◉ Lessons online</span>
                          <span>Lessons done: {teacher.lessons_done}</span>
                          <span>⭐ Rating: {teacher.rating}</span>
                          <span>
                            Price / 1 hour: ${teacher.price_per_hour}
                          </span>
                        </div>
                        <button
                          type="button"
                           className={styles.favoriteButton}
                           onClick={handleFavoriteClick}
                          aria-label="Add teacher to favorites"
                        >
                          {isFavorite ?   "❤️" :  "♡"}
                        </button>
                      </div>
                      <p>
                        <span className={styles.label}>Speaks:</span>{" "}
                        {teacher.languages?.join(", ")}
                      </p>
                      <p>
                        <span className={styles.label}>Lesson info:</span>{" "}
                        {teacher.lesson_info}
                      </p>
                      <p>
                        <span className={styles.label}>Conditions:</span>{" "}
                        {teacher.conditions?.join(", ")}
                    </p>
                    
         
          {isExpanded && (
  <div>
    <p>{teacher.experience}</p>

    <div>
      <h3>Reviews</h3>

      {teacher.reviews?.map((review, index) => (
        <div key={index}>
          <p>
            {review.reviewer_name} ⭐ {review.reviewer_rating}.0
          </p>

          <p>{review.comment}</p>
        
        </div>
      ))}
                  <button type="button" className={styles.bookbutton} >Book leson</button>
    </div>
  </div>
)}
 <ul className={styles.levels}>
                                {teacher.levels?.map((level) => (
                                  <li key={level} className={styles.level}>
                                    {level}
                                  </li>
                                ))}
          </ul>
            <button onClick={() => setIsExpanded(!isExpanded)} className={styles.morebutton}>
        {isExpanded ? "Read less" : "Read more"}
            </button>
            </div>
  
 </article>
    );
};
export default TeacherCard;