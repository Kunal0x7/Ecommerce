import styles from "./Everything.module.css";
import FilterSection from "./FilterSection/FilterSection";
import ProductSection from "./ProductSection/ProductSection";
import PRODUCTS from "../../data/productList";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 

const minPrice = Math.min(...PRODUCTS.map((p) => p.price));
const maxPrice = Math.max(...PRODUCTS.map((p) => p.price));

function getInitialCategory(pathname) {
  if (pathname.startsWith("/groceries")) return ["grocery"];
  if (pathname.startsWith("/juice")) return ["juice"];
  if (pathname.startsWith("/fruits")) return ["fruits"];
  return [];
}

export default function Everything() {
  const location = useLocation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    priceRange: { start: minPrice, end: maxPrice },
    pageNo: 1,
    categories: getInitialCategory(location.pathname), 
    toUseProducts: [],
    searchQuery: "",
  });

  useEffect(() => {
    setFilters({
      priceRange: { start: minPrice, end: maxPrice },
      pageNo: 1,
      categories: getInitialCategory(location.pathname),
      toUseProducts: [],
      searchQuery: "",
    });
    setIsFilterOpen(false);
  }, [location.pathname]); 

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <FilterSection
          filters={filters}
          setFilters={setFilters}
          setIsFilterOpen={setIsFilterOpen}
          isFilterOpen={isFilterOpen}
        />
        <ProductSection filters={filters} setFilters={setFilters} />
      </div>
    </section>
  );
}