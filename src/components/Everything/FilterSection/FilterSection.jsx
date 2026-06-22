// import { FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import styles from "./FilterSection.module.css";
// import FilterBadge from "../FilterSection/FilterBadge/FilterBadge";
// import { useState } from "react";
// import { categories } from "../../../util/util";

// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

// export default function FilterSection() {
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const toggleCategory = (category) => {
//   setSelectedCategories((prev) =>
//     prev.includes(category)
//       ? prev.filter((c) => c !== category)
//       : [...prev, category]
//   );
// };

//   const [value, setValue] = useState([20, 37]);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     console.log("Slider value changed:", newValue);
//   };

//   return (
//     <div className={styles.filterSection}>
//       <div className={styles.filterHeader}>
//         <input type="text" placeholder="Search products..." />
//         <button className={styles.searchButton}>
//           <Link className={styles.searchLink} to="">
//             <FaChevronRight />
//           </Link>
//         </button>
//       </div>
//       <div className={styles.activeFilters}>
//         <h1>Active Filters</h1>
//         <div className={styles.filters}>
//           <FilterBadge
//             filterName="Price"
//             isPrice={true}
//             start={15}
//             end={100}
//             onRemove={() => {}}
//           />
//           <FilterBadge
//             filterName="Category"
//             isPrice={false}
//             onRemove={() => {}}
//           />
//         </div>
//       </div>
//       <div className={styles.clearFooter}>
//         <button>Clear All</button>
//       </div>
//       <div className={styles.rangeFilter}>
//         <h2>Filter by price</h2>
//         <Box sx={{ width: "100%" }}>
//           <Slider
//             min={0}
//             max={500}
//             getAriaLabel={() => "Temperature range"}
//             value={value}
//             onChange={handleChange}
//             valueLabelDisplay="auto"
//             getAriaValueText={(value) => `${value}°C`}
//             disableSwap
//             valueLabelDisplay="auto"
//             sx={{
//               width: "80%",

//               color: "#6A9739",

//               height: 6,

//               "& .MuiSlider-rail": {
//                 backgroundColor: "#d0d0d0",
//                 opacity: 1,
//                 height: 3,
//               },

//               "& .MuiSlider-track": {
//                 border: "none",
//                 height: 4,
//               },

//               "& .MuiSlider-thumb": {
//                 width: 14,
//                 height: 14,
//               },
//             }}
//           />
//         </Box>
//         <div className={styles.valueSet}>
//           <div className={styles.inputList}>
//             <div className={styles.input}>
//               <input id="min-price" type="text" placeholder="0" />
//               <label htmlFor="min-price">Min</label>
//             </div>
//             <div className={styles.input}>
//               <input id="max-price" type="text" placeholder="Max" />
//               <label htmlFor="max-price">Max</label>
//             </div>
//           </div>
//           <div className={styles.Buttons}>
//             <button>SET</button>
//             <button>RESET</button>
//           </div>
//         </div>
//       </div>
//       <div className={styles.categoryFilter}>
//         <h2>Filter by Category</h2>
//         {categories.map((category) => (
//           <label key={category} className={styles.checkboxLabel}>
//             <input
//               type="checkbox"
//               checked={selectedCategories.includes(category)}
//               onChange={() => toggleCategory(category)}
//             />
//             <h4>{category}</h4>
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// }
import { FaChevronRight, FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./FilterSection.module.css";
import FilterBadge from "../FilterSection/FilterBadge/FilterBadge";
import { useState } from "react";
import { categories } from "../../../util/util";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function FilterSection() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.filterSection}>

      {/* Mobile toggle bar — only visible below 768px */}
      <div
        className={styles.mobileToggle}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaFilter />
        <span>Filters</span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}>
          ▼
        </span>
      </div>

      {/* All filter content — always visible on desktop, toggled on mobile */}
      <div className={`${styles.filterContent} ${isOpen ? styles.filterContentOpen : ""}`}>
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
        <div className={styles.rangeFilter}>
          <h2>Filter by price</h2>
          <Box sx={{ width: "100%" }}>
            <Slider
              min={0}
              max={500}
              getAriaLabel={() => "Price range"}
              value={value}
              onChange={handleChange}
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
                <input id="min-price" type="text" placeholder="0" />
                <label htmlFor="min-price">Min</label>
              </div>
              <div className={styles.input}>
                <input id="max-price" type="text" placeholder="Max" />
                <label htmlFor="max-price">Max</label>
              </div>
            </div>
            <div className={styles.Buttons}>
              <button>SET</button>
              <button>RESET</button>
            </div>
          </div>
        </div>
        <div className={styles.categoryFilter}>
          <h2>Filter by Category</h2>
          {categories.map((category) => (
            <label key={category} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              <h4>{category}</h4>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}