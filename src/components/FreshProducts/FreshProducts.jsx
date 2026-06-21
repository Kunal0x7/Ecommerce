import styles from "./FreshProducts.module.css";
import leafImg from "../../assets/basil-leaf.png";
import Product from "./Product";
import ShopButton from "../UI/ShopButton";
import lettuceImg from '../../assets/FreshProducts/lettuce1.png'
import lemonImg from '../../assets/FreshProducts/lemon.png'
import legumeImg from '../../assets/FreshProducts/legume.png'

export default function FreshProducts() {
  return (
    <section className={styles.container}>
      <div className={styles.productContainer}>
        <Product img={lemonImg} title="Farm Fresh Fruits" description="Ut sollicitudin quam vel purus tempus, vel eleifend felis varius." />
        <Product img={lettuceImg} title="FFresh Vegetables" description="Aliquam porta justo nibh, id laoreet sapien sodales vitae justo." />
        <Product img={legumeImg} title="Organic Legume" description="Phasellus sed urna mattis, viverra libero sed, aliquam est." />
      </div>
      <div className={styles.darkBanner}>
        <h2>Get 25% Off On Your First Purchase!</h2>
        <ShopButton />
        <div className={styles.triangle}></div>
      </div>

      <div className={styles.lightBanner}>
        <h2>Try It For Free. No Registration Needed.</h2>
      </div>
      <div className={styles.absoluteLeaf}>
        <img src={leafImg} alt="Basil Leaf" />
      </div>
    </section>
  );
}
