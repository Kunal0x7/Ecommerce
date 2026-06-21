import styles from "./FeaturedBrands.module.css";
import brandLogoImg from "../../assets/BrandLogo.svg";

export default function FeaturedBrands() {
    return (
        <section className={styles.main}>
            <h1>Featured Brands:</h1>
            <img src={brandLogoImg} alt="Brand Logo" />
            <img src={brandLogoImg} alt="Brand Logo" />
            <img src={brandLogoImg} alt="Brand Logo" />
            <img src={brandLogoImg} alt="Brand Logo" />
            <img src={brandLogoImg} alt="Brand Logo" />
        </section>
    )
}