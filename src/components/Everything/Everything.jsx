import styles from "./Everything.module.css";
import FilterSection from "./FilterSection/FilterSection";
import ProductSection from "./ProductSection/ProductSection";


export default function Everything() {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <FilterSection />
        <ProductSection />
      </div>
    </section>
  );
}