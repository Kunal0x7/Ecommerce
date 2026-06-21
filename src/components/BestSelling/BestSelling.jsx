import styles from "./BestSelling.module.css";
import leafImg from "../../assets/logo-leaf-new.png";
import Products from "./Products";
import coffeeImg from "../../assets/ProductsImg/coffee.jpg";
import sanitizer from "../../assets/ProductsImg/sanitizer.jpg";
import chillies from "../../assets/ProductsImg/chillies.jpg";
import oil from "../../assets/ProductsImg/oil.jpg";
import orangeJuice from "../../assets/ProductsImg/orage-juice.jpg";

export default function BestSelling({ isBestSelling }) {
  return (
    <section className={styles.main}>
      <h2>{isBestSelling ? "Best Selling Products" : "Trending Products"}</h2>
      <img src={leafImg} alt="Leaf" />
      <div className={styles.productContainer}>
        <button>
          {
            <Products
              img={coffeeImg}
              type="Groceries"
              name="Arabica Coffee"
              price="35.00"
              onSale={false}
            />
          }
        </button>
        <button>
          {isBestSelling ? (
            <Products
              img={sanitizer}
              type="Groceries"
              name="Hand Sanitizer"
              price="15.00"
              onSale={false}
            />
          ) : (
            <Products
              img={orangeJuice}
              type="juice"
              name="Fresh Orange Juice"
              price="18.00"
              onSale={false}
            />
          )}
        </button>
        <button>
          {isBestSelling ? (
            <Products
              img={chillies}
              type="Groceries"
              name="Handpicked Red Chillies"
              price="19.00"
              onSale={false}
            />
          ) : (
            <Products
              img={sanitizer}
              type="Groceries"
              name="Hand Sanitizer"
              price="15.00"
              onSale={false}
            />
          )}
        </button>
        <button>
          {isBestSelling ? (
            <Products
              img={oil}
              type="Groceries"
              name="Natural Extracted Edible"
              price="34.00"
              onSale={true}
              salePrice="25.00"
            />
          ) : (
            <Products
              img={chillies}
              type="Groceries"
              name="Handpicked Red Chillies"
              price="19.00"
              onSale={false}
            />
          )}
        </button>
      </div>
    </section>
  );
}
