import { FaChevronRight, FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./FilterSection.module.css";
import FilterBadge from "../FilterSection/FilterBadge/FilterBadge";
import { nofCategories } from "../../../util/util";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import PRODUCTS from "../../../data/productList";
import { useState, useEffect, useRef } from "react";

export default function FilterSection({
  filters,
  setFilters,
  isFilterOpen,
  setIsFilterOpen,
}) {
  const searchRef = useRef(null);

  const [localPrice, setLocalPrice] = useState([
    filters.priceRange.start,
    filters.priceRange.end,
  ]);

  useEffect(() => {
    setLocalPrice([filters.priceRange.start, filters.priceRange.end]);
  }, [filters.priceRange.start, filters.priceRange.end]);

  function handleselectSort(e) {
    setFilters((prev) => ({ ...prev, pageNo: 1, sort: e.target.value }));
    window.scrollTo({ top: 340, behavior: "smooth" });
  }

  function handleFilterApply() {
    setFilters((prev) => ({ ...prev, pageNo: 1 }));
    isFilterOpen ? setIsFilterOpen(false) : setIsFilterOpen(true);
  }

  function handleSearch() {
    const searchValue = searchRef.current.value.trim();
    setFilters((prev) => ({
      ...prev,
      pageNo: 1,
      searchQuery: searchValue,
    }));
  }

  return (
    <div className={styles.filterSection}>
      <div className={styles.mobileToggle}>
        <div
          className={styles.smallFilterSection}
          onClick={() => setIsFilterOpen((prev) => !prev)}
        >
          <FaFilter />
          <span>Filters</span>
          <span
            className={`${styles.arrow} ${isFilterOpen ? styles.arrowOpen : ""}`}
          >
            ▼
          </span>
        </div>
        <div className={styles.smallCategorySection}>
          <select
            style={{
              color: "#666666",
              fontFamily: "var(--open-sans)",
              fontSize: "1.3rem",
              width: "100%",
              textAlign: "center",
            }}
            className={styles.sortSelect}
            value={filters.sort}
            onChange={handleselectSort}
          >
            <option value="default">Sort by: Default</option>
            <option value="lowToHigh">Sort by price: low to high</option>
            <option value="highToLow">Sort by price: high to low</option>
          </select>
        </div>
      </div>

      <div
        className={`${styles.filterContent} ${isFilterOpen ? styles.filterContentOpen : ""}`}
      >
        <div className={styles.filterHeader}>
          <input type="text" placeholder="Search products..." ref={searchRef} />
          <button className={styles.searchButton} onClick={handleSearch}>
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

        <div className={styles.rangeFilter}>
          <h2>Filter by Price :</h2>
          <Box sx={{ width: "100%" }}>
            <Slider
              min={Math.min(...PRODUCTS.map((product) => product.price))}
              max={Math.max(...PRODUCTS.map((product) => product.price))}
              getAriaLabel={() => "Price range"}
              value={localPrice} // ✅ local state drives thumb
              onChange={(e, newValue) => setLocalPrice(newValue)} // ✅ smooth drag
              onChangeCommitted={(e, newValue) => {
                // ✅ only updates filters on release
                setFilters((prev) => ({
                  ...prev,
                  pageNo: 1,
                  priceRange: {
                    start: newValue[0],
                    end: newValue[1],
                  },
                }));
              }}
              valueLabelDisplay="auto"
              getAriaValueText={(v) => `$${v}`}
              disableSwap
              sx={{
                width: "80%",
                color: "#6A9739",
                height: 6,
                "& .MuiSlider-rail": {
                  backgroundColor: "#d0d0d0",
                  opacity: 1,
                  height: 3,
                },
                "& .MuiSlider-track": {
                  border: "none",
                  height: 4,
                },
                "& .MuiSlider-thumb": {
                  width: 14,
                  height: 14,
                },
              }}
            />
          </Box>

          <div className={styles.valueSet}>
            <div className={styles.inputList}>
              <div className={styles.input}>
                <input
                  id="min-price"
                  type="text"
                  placeholder="0"
                  value={localPrice[0]} // ✅ show local value while dragging
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setLocalPrice((prev) => [val, prev[1]]);
                    setFilters((prev) => ({
                      ...prev,
                      priceRange: { ...prev.priceRange, start: val },
                    }));
                  }}
                />
                <label htmlFor="min-price">Min</label>
              </div>
              <div className={styles.input}>
                <input
                  id="max-price"
                  type="text"
                  placeholder="Max"
                  value={localPrice[1]} // ✅ show local value while dragging
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setLocalPrice((prev) => [prev[0], val]);
                    setFilters((prev) => ({
                      ...prev,
                      priceRange: { ...prev.priceRange, end: val },
                    }));
                  }}
                />
                <label htmlFor="max-price">Max</label>
              </div>
            </div>
            <div className={styles.Buttons}>
              <button onClick={handleFilterApply}>Apply Filters</button>
            </div>
          </div>
        </div>

        <div className={styles.categoryFilter}>
          <h2>Filter by Category</h2>
          {nofCategories.map((category) => (
            <label key={category} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={() =>
                  setFilters((prev) => ({
                    ...prev,
                    categories: prev.categories.includes(category)
                      ? prev.categories.filter((c) => c !== category)
                      : [...prev.categories, category],
                  }))
                }
              />
              <h4>{category}</h4>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
