import { HiOutlineShoppingCart } from "react-icons/hi";
import styles from "./FloatingCart.module.css";

export default function FloatingCart() {
  return (
    <button className={styles.container}>
      <HiOutlineShoppingCart className={styles.icon} />

      <div className={styles.cartValue}>0</div>
    </button>
  );
}
