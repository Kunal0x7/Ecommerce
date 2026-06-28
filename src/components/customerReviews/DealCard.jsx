import styles from './DealCard.module.css'
import ShopButton from '../UI/ShopButton';
import { Link } from 'react-router-dom';

export default function DealCard() {
    return(
        <section className={styles.main}>
            <h1>Deal Of The Day 15% Off On All Vegetables!</h1>
            <p>I am text block. Click edit button to change this text.</p>
            <Link to="/everything"><ShopButton /></Link>
        </section>
    )
}