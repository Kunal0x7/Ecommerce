import { useEffect, useCallback, useRef } from "react";

import { useLocation } from "react-router-dom";
import styles from "./ProductSection.module.css";

import Product from "../../BestSelling/Product";

import PRODUCTS from "../../../data/productList";

import { Link } from "react-router-dom";

export default function ProductSection({ filters, setFilters }) {
  const currentRoute = useLocation();
  const scrollTimeout = useRef(null);
  const handleInfiniteScroll = useCallback(() => {
    if (scrollTimeout.current) return; // ✅ debounce

    scrollTimeout.current = setTimeout(() => {
      scrollTimeout.current = null;
      try {
        const threshold = window.innerWidth <= 768 ? 1600 : 1000;
        if (
          document.documentElement.scrollHeight -
            window.innerHeight -
            document.documentElement.scrollTop <
          threshold
        ) {
          setFilters((prev) => ({ ...prev, pageNo: prev.pageNo + 1 }));
        }
      } catch (e) {
        console.log(e);
      }
    }, 200); // wait 200ms before firing
  }, [setFilters]);

  useEffect(() => {
    let sorted = [...PRODUCTS];

    if (filters.searchQuery && filters.searchQuery.trim() !== "") {
      sorted = sorted.filter((p) =>
        p.name.toLowerCase().includes(filters.searchQuery.toLowerCase()),
      );
    }

    if (filters.sort === "lowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "highToLow") {
      sorted.sort((a, b) => b.price - a.price);
    }

    if (filters.categories.length > 0) {
      sorted = sorted.filter((p) => filters.categories.includes(p.category));
    }

    sorted = sorted.filter(
      (p) =>
        p.price >= filters.priceRange.start &&
        p.price <= filters.priceRange.end,
    );

    const toUse = sorted.slice(0, filters.pageNo * 12);

    setFilters((prev) => ({
      ...prev,
      toUseProducts: toUse,
    }));
  }, [
    filters.pageNo,
    filters.sort,
    filters.categories,
    filters.priceRange,
    filters.searchQuery,
    setFilters,
  ]);
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, [handleInfiniteScroll]);

  function handleselectSort(e) {
    setFilters((prev) => ({ ...prev, pageNo: 1, sort: e.target.value }));

    window.scrollTo({
      top: 340,

      behavior: "smooth",
    });
  }

  return (
    <div className={styles.productSection}>
      <div className={styles.upperArea}>
        <h3>Random Food Fact</h3>

        <h1>
          {currentRoute.pathname === "/shop"
            ? "All Products"
            : currentRoute.pathname
                .split("/")
                .pop()
                .replace("-", " ")
                .toUpperCase()}
        </h1>

        <p>
          Explore our curated selection of fresh, natural juices made from
          high-quality ingredients. Designed for a healthier lifestyle, our
          juices combine great taste with essential nutrition, delivering a
          refreshing and energizing experience in every sip.
        </p>
      </div>

      <div className={styles.beforeProductContainer}>
        <h3>Showing {filters.toUseProducts.length} products</h3>

        <select
          style={{
            color: "#666666",

            fontFamily: "var(--open-sans)",

            fontSize: "1rem",

            textAlign: "center",
          }}
          className={styles.sortSelect}
          value={filters.sort}
          onChange={handleselectSort}
        >
          <option value="default">Default</option>

          <option value="lowToHigh">Sort by price: low to high</option>

          <option value="highToLow">Sort by price: high to low</option>
        </select>
      </div>

      <div className={styles.filterPlaceholder}></div>

      <div className={styles.productContainer}>
        {filters.toUseProducts.map((product, index) => (
          <Link to={`shop/${product.id}`} key={index}>
            <Product
              img={`${product.image}`}
              type={product.category}
              name={product.name}
              price={product.price}
              onSale={product.onSale}
              salePrice={product.salePrice}
            />
          </Link>
        ))}
      </div>
      {console.log(filters.categories.length)}
    </div>
  );
}
