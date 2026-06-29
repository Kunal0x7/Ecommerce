import { HiOutlineShoppingCart } from "react-icons/hi";
import styles from "./FloatingCart.module.css";
import { useSelector } from "react-redux";

export default function FloatingCart() {
  const cart = useSelector((state) => state.cart);

  return (
    <button className={styles.container}>
      <HiOutlineShoppingCart className={styles.icon} />

      <div className={styles.cartValue}>{cart.totalQuantity}</div>
    </button>
  );
}
