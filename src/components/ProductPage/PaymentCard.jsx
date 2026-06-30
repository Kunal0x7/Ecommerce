import styles from "./PaymentCard.module.css";
export default function PaymentCard({image ,alt}) {
    return(
        <div className={styles.cardContainer}>
            <img src={image} alt={alt} className={styles.cardImage}/>
        </div>
    )
}