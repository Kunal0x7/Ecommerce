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
            <Link onClick={closeAction} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeAction} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeAction} to="/everything">
              Everything
            </Link>
          </li>
          <li>
            <Link onClick={closeAction} to="/groceries">
              Groceries
            </Link>
          </li>
          <li>
            <Link onClick={closeAction} to="/juice">
              Juice
            </Link>
          </li>
          {/* <li>
            <Link onClick={closeAction} to="/contact">
              Contact
            </Link>
          </li> */}
          <li>
            <Link onClick={closeAction} to="/account">
              Account
            </Link>
          </li>
        </ul>
        <button className={styles.closeBtn} onClick={closeAction}>
          <IoMdClose className={styles.closeIcon} />
        </button>
      </section>
    </>
  );
}