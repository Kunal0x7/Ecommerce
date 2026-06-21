import styles from './DealCard.module.css'
import ShopButton from '../UI/ShopButton';

export default function DealCard() {
    return(
        <section className={styles.main}>
            <h1>Deal Of The Day 15% Off On All Vegetables!</h1>
            <p>I am text block. Click edit button to change this text.</p>
            <ShopButton />
        </section>
    )
}