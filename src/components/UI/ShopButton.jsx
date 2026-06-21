import styles from "./ShopButton.module.css";
import { IoMdCart } from "react-icons/io";

export default function ShopButton() {
  return (
    <button className={styles.shopButton}>
      {" "}
      <IoMdCart
        style={{
          color: "#ffffff",
          fontSize: "20px",
          cursor: "pointer",
        }}
      />
      <h6>SHOP NOW</h6>
    </button>
  );
}
