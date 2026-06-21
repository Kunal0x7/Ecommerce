import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Everything.module.css";
import FilterBadge from "./FilterBadge";
export default function Everything() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
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
        </div>
        <div className={styles.productSection}></div>
      </div>
    </section>
  );
}
