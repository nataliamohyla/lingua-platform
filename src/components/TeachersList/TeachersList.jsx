import { useEffect, useState } from "react";
import { getTeachers } from "../../services/teacersApi";
import styles from "./TeachersList.module.css";
import { Link } from "react-router";
import TeacherCard from "../TeacherCard/TeacherCard.jsx";

function TeachersList() {
  const [teachers, setTeachers] = useState([]);
  const[visibleTeachers, setVisibleTeachers] = useState(3)
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
    {teachers.slice(0, visibleTeachers).map((teacher) => (
      <TeacherCard key={teacher.id} teacher = {teacher} />
     
    ))}
    {visibleTeachers < teachers.length && (
      <button type="button" className={styles.button} onClick={() => setVisibleTeachers((prev) => prev + 3)} > Load more </button>
   )}
  </div>

);

};

export default TeachersList;
