import { useEffect, useState } from "react";
import { getTeachers } from "../../services/teacersApi";
import styles from "./TeachersList.module.css";
import { Link } from "react-router";
import TeacherCard from "../TeacherCard/TeacherCard.jsx";
import FilterPanel from "../FilterPanel/FilterPanel.jsx";

function TeachersList() {
  const [teachers, setTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState(3)
     const [filters, setFilters] = useState({
        language: "",
        level: "",
        price: ""
    });
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

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesLanguage = !filters.language || teacher.languages?.includes(filters.language);
    const matchesLevel = !filters.level || teacher.levels?.includes(filters.level);
  const matchesPrice =
  !filters.price ||
  teacher.price_per_hour === Number(filters.price);
    return matchesLanguage && matchesLevel && matchesPrice;

  })
return (
  <div className={styles.list}>
  <FilterPanel filters={filters} onFilterChange={setFilters} />

  {filteredTeachers.length === 0 ? (
    <h2 className={styles.noResults}>
      No teachers found matching your filters.
    </h2>
  ) : (
    filteredTeachers.slice(0, visibleTeachers).map((teacher) => (
      <TeacherCard key={teacher.id} teacher={teacher} />
    ))
  )}

  {visibleTeachers < filteredTeachers.length && (
    <button
      type="button"
      className={styles.button}
      onClick={() => setVisibleTeachers((prev) => prev + 3)}
    >
      Load more
    </button>
  )}
</div>

);

};

export default TeachersList;
