import styles from "./HamNav.module.css";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export default function HamNav({ hamOpen, closeAction }) {
  return (
    <>
      <div
        className={`${styles.backdrop} ${
          hamOpen ? styles.backdropShow : styles.backdropHide
        }`}
        onClick={closeAction}
      />
      <section
        className={`${styles.hamNav} ${hamOpen ? styles.show : styles.hide}`}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <Link to="/everything">Everything</Link>
          </li>
          <li>
            <a href="#">Groceries</a>
          </li>
          <li>
            <a href="#">Juice</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
        </ul>
        <button className={styles.closeBtn} onClick={closeAction}>
          <IoMdClose className={styles.closeIcon} />
        </button>
      </section>
    </>
  );
}