import styles from "./ReviewCard.module.css";
import { FaStar } from "react-icons/fa";

export default function ReviewCard({
  avatar,
  name,
  text,
  rating ,
}) {
  return (
      <section className={styles.main}>
        <div className={styles.stars}>
          {Array.from({ length: rating }).map((_, i) => (
            <FaStar key={i} style={{ color: "#FFBB1D" }} />
          ))}
        </div>
        <p className={styles.text}>{text}</p>
        <div className={styles.author}>
          <img src={avatar} alt={name} />
          <h3>{name}</h3>
        </div>
      </section>
  );
}
