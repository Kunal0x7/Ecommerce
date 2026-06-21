import styles from "./Footer.module.css";
import logoImg from "../../assets/footerLogo.png";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className={styles.main}>
            <div className={styles.upperFooter}>
                <div className={styles.gridContainer}>
                    <div className={`${styles.gridItem} ${styles.first}`}>
                        <img src={logoImg} alt="Organic Store Logo" className={styles.logo} />
                        <h2>Maecenas mi justo, interdum at consectetur vel, tristique et arcu.</h2>
                    </div>
                    <div className={`${styles.gridItem} ${styles.rest}`}>
                        <h1>Website</h1>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Everything</a></li>
                            <li><a href="#">Groceries</a></li>
                            <li><a href="#">Juice</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.gridItem} ${styles.rest}`}>
                        <h1>Quick Links</h1>
                        <ul>
                            <li><a href="#">Know More About Us</a></li>
                            <li><a href="#">Visit Store</a></li>
                            <li><a href="#">Let’s Connect</a></li>
                            <li><a href="#">Locate Stores</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.gridItem} ${styles.rest}`}>
                        <h1>Site Links</h1>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Shipping Details</a></li>
                            <li><a href="#">Offers Coupons</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.lowerFooter}>
                <div className={styles.copyright}>
                    <p>Copyright © 2026 | Organic Store</p>
                </div>
                <div className={styles.socialIcons}>
                    <a href="#"><FaFacebook className={styles.icons}/></a>
                    <a href="#"><RiTwitterFill className={styles.icons}/></a>
                    <a href="#"><PiPhoneCallFill className={styles.icons}/></a>
                    <a href="#"><FaInstagram className={styles.icons}/></a>
                </div>
            </div>
        </footer>
    )
}