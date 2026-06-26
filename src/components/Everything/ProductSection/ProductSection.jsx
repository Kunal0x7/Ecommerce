import { useState, useEffect, useCallback } from "react";
import styles from "./ProductSection.module.css";
import Product from "../../BestSelling/Product";
import PRODUCTS from "../../../data/productList";
import { Link } from "react-router-dom";

export default function ProductSection() {
  const [toUseProducts, setToUseProducts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [sort, setSort] = useState("default");

  const checkSortedProducts = useCallback(() => {
    if (sort === "lowToHigh") {
      const toUse = [...PRODUCTS].sort((a, b) => a.price - b.price);
      setToUseProducts(toUse);
      // setPageNo(1);
      // window.scrollTo({
      //   top: 0,
      //   behavior: "smooth", // or "auto"
      // });
    } else if (sort === "highToLow") {
      const toUse = [...PRODUCTS].sort((a, b) => b.price - a.price);
      setToUseProducts(toUse);
      // setPageNo(1);
      // window.scrollTo({
      //   top: 0,
      //   behavior: "smooth", // or "auto"
      // });
    } else if (sort === "default") {
      const toUse = [...PRODUCTS];
      setToUseProducts(toUse);
      // setPageNo(1);
      // window.scrollTo({
      //   top: 0,
      //   behavior: "smooth",
      // });
    }
  }, [sort]);

  const handleInfiniteScroll = useCallback(()=>{
      try {
      if (
        document.documentElement.scrollHeight -
          window.innerHeight -
          document.documentElement.scrollTop <
        500
      ) {
        setPageNo((prevPageNo) => prevPageNo + 1);
        console.log("Page no is " + pageNo);
      }
    } catch (e) {
      console.log(e);
    }
  },[pageNo])

  useEffect(() => {
    checkSortedProducts();
    const startIndex = (pageNo - 1) * 12;

    const newProducts = toUseProducts.slice(startIndex, 12);

    setToUseProducts((prev) => [...prev, ...newProducts]);
  }, [pageNo, sort]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  },[]);

  return (
    <div className={styles.productSection}>
      <div className={styles.upperArea}>
        <h3>Random Food Fact</h3>
        <h1>Juice</h1>
        <p>
          Explore our curated selection of fresh, natural juices made from
          high-quality ingredients. Designed for a healthier lifestyle, our
          juices combine great taste with essential nutrition, delivering a
          refreshing and energizing experience in every sip.
        </p>
      </div>
      <div className={styles.beforeProductContainer}>
        <h3>Showing 12 products</h3>
        <select
          style={{
            color: "#666666",
            fontFamily: "var(--open-sans)",
            fontSize: "1rem",
            textAlign: "center",
          }}
          className={styles.sortSelect}
          value={sort}
          onChange={(e) => {
            console.log(e.target.value);
            setSort(e.target.value);
          }}
        >
          <option value="default">Default</option>
          <option value="lowToHigh">Sort by price: low to high</option>
          <option value="highToLow">Sort by price: high to low</option>
        </select>
      </div>
      <div className={styles.filterPlaceholder}></div>
      <div className={styles.productContainer}>
        {toUseProducts.map((product, index) => (
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
    </div>
  );
}
