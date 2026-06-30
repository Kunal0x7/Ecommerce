// import { HiOutlineShoppingCart } from "react-icons/hi";
// import styles from "./FloatingCart.module.css";
// import { useSelector } from "react-redux";
// import { toggleCartActions } from "../store/toogle-cart-slice";
// import { useDispatch } from "react-redux";

// export default function FloatingCart() {
//   const dispatch = useDispatch();
//     const cartItems = useSelector((state) => state.cart.items);
//   function toggleCartHandler() {
//     console.log("NAV: toggle fired");
//     dispatch(toggleCartActions.toggle());
//   }
//   return (
//     <button className={styles.container} onClick={toggleCartHandler}>
//       <HiOutlineShoppingCart className={styles.icon} />

//       <div className={styles.cartValue}>{cartItems.length}</div>
//     </button>
//   );
// }

import { HiOutlineShoppingCart } from "react-icons/hi";
import styles from "./FloatingCart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartActions } from "../store/toogle-cart-slice";
import { useRef, useState, useEffect } from "react";

export default function FloatingCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const btnRef = useRef(null);
  const [pos, setPos] = useState(null); // null = use default CSS bottom/right
  const dragInfo = useRef({ dragging: false, moved: false, offsetX: 0, offsetY: 0 });

  function clampToViewport(x, y) {
    const el = btnRef.current;
    if (!el) return { x, y };
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const maxX = window.innerWidth - w;
    const maxY = window.innerHeight - h;
    return {
      x: Math.min(Math.max(x, 0), maxX),
      y: Math.min(Math.max(y, 0), maxY),
    };
  }

  function handlePointerDown(e) {
    const el = btnRef.current;
    const rect = el.getBoundingClientRect();
    dragInfo.current = {
      dragging: true,
      moved: false,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    };
    el.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e) {
    if (!dragInfo.current.dragging) return;
    dragInfo.current.moved = true;

    const newX = e.clientX - dragInfo.current.offsetX;
    const newY = e.clientY - dragInfo.current.offsetY;
    setPos(clampToViewport(newX, newY));
  }

  function handlePointerUp(e) {
    dragInfo.current.dragging = false;
    btnRef.current?.releasePointerCapture(e.pointerId);
  }

  function toggleCartHandler() {
    // Ignore click if it was actually a drag
    if (dragInfo.current.moved) {
      dragInfo.current.moved = false;
      return;
    }
    dispatch(toggleCartActions.toggle());
  }

  // Keep button inside viewport on window resize
  useEffect(() => {
    function handleResize() {
      setPos((prev) => (prev ? clampToViewport(prev.x, prev.y) : prev));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const style = pos
    ? { left: pos.x, top: pos.y, bottom: "auto", right: "auto" }
    : undefined;

  return (
    <button
      ref={btnRef}
      className={styles.container}
      style={style}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onClick={toggleCartHandler}
    >
      <HiOutlineShoppingCart className={styles.icon} />
      <div className={styles.cartValue}>{cartItems.length}</div>
    </button>
  );
}