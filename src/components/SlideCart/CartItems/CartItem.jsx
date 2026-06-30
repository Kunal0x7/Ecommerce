import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

export default function CartItem({ item }) {
    const dispatch = useDispatch();
    function removeItemHandler() {
        dispatch(cartActions.removeItemFromCart(item.id));
    }
    function addItemHandler() {
        dispatch(cartActions.addItemToCart(item));
    }
    function removeItemFullyHandler() {
        dispatch(cartActions.removeItemFully(item.id));
    }

    return(
        <div className={styles.cartItem}>
            <div className={styles.left}>
                <div className={styles.imageSection}>
                    <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.details}>
                    <h1>{item.name}</h1>
                    <h3>₹{item.totalPrice.toFixed(2)}</h3>
                    <button onClick={removeItemFullyHandler}>Remove</button>
                </div>
            </div>
            <div className={styles.right}>
                <button onClick={addItemHandler}>+</button>
                <h3>{item.quantity}</h3>
                <button onClick={removeItemHandler}>-</button>
            </div>
        </div>
    )
}