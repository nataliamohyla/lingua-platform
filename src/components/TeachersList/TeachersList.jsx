import { useEffect, useState } from "react";
import { getTeachers } from "../../services/teacersApi";
import styles from "./TeachersList.module.css";

function TeachersList() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        const data = await getTeachers();
        setTeachers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTeachers();
  }, []);
  if (loading) {
    return <p>Loading teachers...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
return (
  <div className={styles.list}>
    {teachers.map((teacher) => (
      <article key={teacher.id} className={styles.item}>
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
              aria-label="Add teacher to favorites"
            >
              ♡
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

          <button type="button" className={styles.readMore}>
            Read more
          </button>

          <ul className={styles.levels}>
            {teacher.levels?.map((level) => (
              <li key={level} className={styles.level}>
                {level}
              </li>
            ))}
          </ul>
        </div>
      </article>
    ))}
  </div>
);
  
};

export default TeachersList;