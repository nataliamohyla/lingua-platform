import { useEffect, useState } from "react";
import { getTeachers } from "../../servises/teacersApi";
import styles from './TeachersList.module.css';

function TeachersList() {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const LoadTeachers = async () => {
            try {
                const data = await getTeachers();
                setTeachers(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        LoadTeachers();
    }, []);
    if (loading) {
        return <p>Loading teachers ...</p>
    }
    if (error) {
        return <p>Error: {error }</p>
    }
    return (
        <div className={styles.list}>
            <ul>
                {teachers.map((teacher) => (
                    <li key={teacher.id}>
                        <img src={teacher.avatar_url} alt={teacher.name}/>
                        <h2>{teacher.name}</h2>
                        <div className={styles.ratinglist}>
                            <span>{teacher.rating}</span>
                            <span>Lessons done: {teacher.lessons_done}</span>
                            <span>${ teacher.price_per_hour}/hour</span>
                        </div>
                        <div>
                             <p>Speak:{teacher.languages.join(", ")}</p>
                            <p>Lesson info: {teacher.lesson_info}</p>
                            <div>
                               <p>Conditions:</p>
                                <ul>
                                 {teacher.conditions.map((condition) => (
                                  <li key={condition}>
                                       {condition}
                                  </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                           <ul>
                             {teacher.levels.map((level) => (
                            <li key={level}>
                                {level}
                                    </li>
                                 ))}
                            </ul>
                         </div>
                       
                    </li>
                ))}
            </ul>
        </div>
    )
};
export default TeachersList;