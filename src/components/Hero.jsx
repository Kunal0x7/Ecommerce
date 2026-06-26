import styles from "./Hero.module.css";
import heroImg from "../assets/organic-products-hero.png";
import newLeaf from "../assets/logo-leaf-new.png";
import ShopButton from "./UI/ShopButton";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <section className={styles.hero}>
        <div className={styles.left}>
          <img src={heroImg} alt="Organic Products" />
        </div>
        <div className={styles.right}>
          <div className={styles.rightContent}>
            <div className={styles.smallImg}>
              <img src={newLeaf} alt="New Leaf Logo" />
            </div>
            <h4>Best Quality Products</h4>
            <h1>Join The Organic Movement!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Link to="everything">
              <ShopButton />
            </Link>
          </div>
          <img src={newLeaf} alt="leaf" className={styles.leaf} />
        </div>
      </section>
    </section>
  );
}
