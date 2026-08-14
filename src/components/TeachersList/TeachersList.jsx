import { useEffect, useState } from "react";
import { getTeachers } from "../../services/teacersApi";
import styles from "./TeachersList.module.css";

function TeachersList() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect started");

    const loadTeachers = async () => {
      try {
        console.log("before getTeachers");

        const data = await getTeachers();

        console.log("teachers received:", data);

        setTeachers(data);
      } catch (error) {
        console.error("getTeachers error:", error);
        setError(error.message);
      } finally {
        console.log("finally");
        setLoading(false);
      }
    };

    loadTeachers();
  }, []);

  console.log("render:", {
    loading,
    teachers,
    error,
  });

  if (loading) {
    return <p>Loading teachers...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.list}>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            <img
              src={teacher.avatar_url}
              alt={teacher.name}
            />

            <h2>{teacher.name}</h2>

            <div className={styles.ratingList}>
              <span>⭐ {teacher.rating}</span>
              <span>Lessons done: {teacher.lessons_done}</span>
              <span>${teacher.price_per_hour}/hour</span>
            </div>

            <p>
              Speaks: {teacher.languages?.join(", ")}
            </p>

            <p>
              Lesson info: {teacher.lesson_info}
            </p>

            <p>
              Conditions: {teacher.conditions?.join(", ")}
            </p>

            <ul>
              {teacher.levels?.map((level) => (
                <li key={level}>{level}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeachersList;