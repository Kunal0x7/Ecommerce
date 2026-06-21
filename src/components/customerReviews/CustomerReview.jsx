import styles from "./customerReview.module.css";
import leafImg from "../../assets/logo-leaf-new.png";
import ReviewCard from "./ReviewCard";
import DealCard from "./DealCard";
import milaImg from "../../assets/milli.png";
import mikeImg from "../../assets/Mike.png";
  const details = [
    {
      avatar: milaImg,
      name: "Mila Kunis",
      text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      rating: 5,
    },
    {
      avatar: mikeImg,
      name: "Mike Johnson",
      text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      rating: 4,
    },
  ];

export default function CustomerReview() {
  return (
    <section className={styles.main}>
      <h1>Recent Customer Reviews</h1>
      <img src={leafImg} alt="Leaf Logo" />
      <div className={styles.cardsContainer}>
   
        <ReviewCard  avatar={details[0].avatar} name={details[0].name} text={details[0].text} rating={details[0].rating} />
        <DealCard />
        <ReviewCard  avatar={details[1].avatar} name={details[1].name} text={details[1].text} rating={details[1].rating} />
      </div>
    </section>
  );
}
