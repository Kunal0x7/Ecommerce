import styles from "./SlideCart.module.css";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleCartActions } from "../../store/toogle-cart-slice";
import CartItem from "./CartItems/CartItem";
import { LuMoveRight } from "react-icons/lu";
import { FaChevronUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function SlideCart() {
  const dispatch = useDispatch();
  const [couponDetails, setcouponDetails] = useState({
    open: false,
    code: "",
    codeStatus:null
  });
  const isCartOpen = useSelector((state) => state.toggleCart.isCartOpen);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  function toggleCartHandler() {
    console.log("NAV: toggle fired");
    dispatch(toggleCartActions.toggle());
  }
  const cartItems = useSelector((state) => state.cart.items);
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  return (
    <>
      <div
        className={`${styles.backdrop} ${isCartOpen ? styles.backdropShow : ""}`}
        onClick={toggleCartHandler}
      />
      <div
        className={`${styles.slideCart}  ${isCartOpen ? styles.show : styles.hide}`}
      >
        <div className={styles.message}>
          <h1>
            You're <span>₹{totalAmount.toFixed(2)}</span> away from shipping
          </h1>
        </div>
        <div className={styles.backSlide}>
          <button onClick={toggleCartHandler}>
            <BsArrowRight className={styles.arrow} />
          </button>
          <h3>Review Your Cart</h3>
        </div>
        <div
          className={`${styles.cartItems} ${cartItems.length === 0 ? styles.empty : ""}`}
        >
          {cartItems.length === 0 ? (
            <h1>Your cart is empty</h1>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          )}
          {}
        </div>
        <div className={styles.fixedBottom}>
          <div className={styles.couponContainer}>
            <button
              className={styles.haveCoupon}
              onClick={() => setcouponDetails({...couponDetails, open: !couponDetails.open})}
            >
              <h2>Got a Discount Coupon?</h2>

              <div className={`${couponDetails.open ? styles.up : styles.down}`}>
                <FaChevronUp
                  style={{ color: "#578d1e", fontSize: "1.7rem" }}
                  className={styles.arrow}
                />
              </div>
            </button>
          </div>
          <div
            className={`${styles.coupnInputContainer} ${couponDetails.open ? styles.coupnInputContainerOpen : ""}`}
          >
            <div className={styles.couponInputInner}>
              <div className={styles.couponInput}>
                <div className={styles.ui}>
                  <input type="text" placeholder="Enter coupon code" />
                  <button>Apply</button>
                </div>
                <h3>Enter a valid Coupon Code</h3>
              </div>
            </div>
          </div>
          <div className={styles.total}>
            <h2>Total </h2>
            <h2>₹{totalAmount.toFixed(2)}</h2>
          </div>
          <div className={styles.checkout}>
            <button>
              <h1>Proceed to Checkout</h1>{" "}
              <LuMoveRight
                style={{ color: "white", fontSize: "1.5rem" }}
              />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
