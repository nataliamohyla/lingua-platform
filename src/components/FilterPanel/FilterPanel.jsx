
import styles from "./FilterPanel.module.css";


const FilterPanel = ({ filters, onFilterChange }) => {

 
    const handeleChange = (event) => {
        const { name, value } = event.target;
        const newFilters = {
            ...filters,
            [name]: value,
        };
        
        onFilterChange(newFilters);
    };

    return (
        <div className={styles.filterbar}>
            <select name="language" value={filters.language} onChange={handeleChange} className={styles.select}>
                <option value="">Language</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="Mandarin Chinese">Mandarin Chinese</option>
                <option value="Italian">Italian</option>
                <option value="Korean">Korean</option>
                <option value="German">German</option>
                <option value="Vietnamese">Vietnamese</option>
               
            </select>
            <select name="level" value={filters.level} onChange={handeleChange} className={styles.select} >
                <option value="">Level of knowledge</option>
               <option value="A1 Beginner">A1 Beginner</option>
               <option value="A2 Elementary">A2 Elementary</option>
              <option value="B1 Intermediate">B1 Intermediate</option>
              <option value="B2 Upper-Intermediate">B2 Upper-Intermediate</option>
            </select>
            <select name="price" value={filters.price} onChange={handeleChange} className={styles.select}>
                <option value="">Price</option>
              
                <option value="25">25$</option>
                <option value="26">26$</option>
                <option value="27">27$</option>
                <option value="28">28$</option>
                 <option value="29">29$</option>
                <option value="30">30$</option>
                <option value="31">31$</option>
                <option value="32">32$</option>
                <option value="33">33$</option>
                 <option value="34">34$</option>
                <option value="35">35$</option>
            </select>
        </div>
    );

};
export default FilterPanel;