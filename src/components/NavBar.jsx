import Logo from "../assets/organic-store-logo5.svg";
import { IoMdCart } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleCartActions } from "../store/toogle-cart-slice";

import styles from "./NavBar.module.css";
export default function NavBar({ toggleHam }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  function toggleCartHandler() {
    dispatch(toggleCartActions.toggle());
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <button>
          <Link to="/"><img src={Logo} alt="Logo" /></Link>
        </button>
      </div>
      <div className={styles.center}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/everything">Everything</Link>
          </li>
          <li>
            <Link to="/groceries">Groceries</Link>
          </li>
          <li>
            <Link to="/juice">Juice</Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </div>
      <div className={styles.right}>
        <p>₹ {totalAmount.toFixed(2)}</p>
        <div className={styles.cart}>
          <button onClick={toggleCartHandler}>
            <IoMdCart
              style={{ color: "#8BC34A", fontSize: "24px", cursor: "pointer" }}
            />
            <span className={styles.cartBadge}>{cart.totalQuantity}</span>
          </button>
        </div>

        <button className={styles.person}>
          <IoPerson
            style={{ color: "#111111", fontSize: "24px", cursor: "pointer" }}
          />
        </button>
        <button className={styles.hamBtn} onClick={toggleHam}>
          <GiHamburgerMenu style={{ color: "white", fontSize: "20px",background:"#8BC34A",height:"90%",width:"90%",objectFit:"contain"}}/>
        </button>
      </div>
    </nav>
  );
}
