import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./FilterSection.module.css";
import FilterBadge from "../FilterSection/FilterBadge/FilterBadge";

export default function FilterSection() {
  return (
    <div className={styles.filterSection}>
      <div className={styles.filterHeader}>
        <input type="text" placeholder="Search products..." />
        <button className={styles.searchButton}>
          <Link className={styles.searchLink} to="">
            <FaChevronRight />
          </Link>
        </button>
      </div>
      <div className={styles.activeFilters}>
        <h1>Active Filters</h1>
        <div className={styles.filters}>
          <FilterBadge
            filterName="Price"
            isPrice={true}
            start={15}
            end={100}
            onRemove={() => {}}
          />
          <FilterBadge
            filterName="Category"
            isPrice={false}
            onRemove={() => {}}
          />
        </div>
      </div>
      <div className={styles.clearFooter}>
        <button>Clear All</button>
      </div>
      <div className={styles.rangeFilter}></div>
    </div>
  );
}