import styles from "./Features.module.css";
import { MdLocalShipping } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";
import { BsCashStack } from "react-icons/bs";
import { RiRecycleFill } from "react-icons/ri";

export default function Features() {
  return (
    <section className={styles.container}>
      <section className={styles.features}>
        <div className={styles.feature}>
            <MdLocalShipping className={styles.icon} />
            <h2>Free Shipping</h2>
            <p>Above $5 Only</p>
        </div>
        <div className={styles.feature}>
            <RiContactsBook3Fill className={styles.icon} />
            <h2>Certified Organic</h2>
            <p>100% Guarantee</p>
        </div>
        <div className={styles.feature}>
            <BsCashStack className={styles.icon} />
            <h2>Huge Savings</h2>
            <p>At Lowest Price</p>
        </div>
        <div className={styles.feature}>
            <RiRecycleFill className={styles.icon} />
            <h2>Easy returns</h2>
            <p>No Questions Asked</p>
        </div>
      </section>
    </section>
  );
}
