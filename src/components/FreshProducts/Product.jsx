import styles from './Product.module.css'
import { FaArrowRight } from "react-icons/fa";

export default function Product({ img, title, description }){

    return(
        <section className={styles.card}>
            <h1>{title}</h1>
            <p>{description}</p>
            <button>SHOP NOW <FaArrowRight /></button>
            <div className={styles.photoContainer}>
                <img src={img} alt={title} />
            </div>
            
        </section>
    )
}