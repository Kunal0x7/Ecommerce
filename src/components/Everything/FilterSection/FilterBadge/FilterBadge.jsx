import styles from "./FilterBadge.module.css";
import { IoClose } from "react-icons/io5";
export default function FilterBadge({ filterName, isPrice, onRemove , start, end }) {
  return (
    <div className={styles.filterBadge}>
        <div className={styles.editFilter}>
            <button onClick={onRemove}>
                <IoClose />
            </button>
                   <h3>{filterName}:</h3>
        </div>
                    {isPrice && <p>Range: ${start} - ${end}</p>}
 
    </div>
  );
}