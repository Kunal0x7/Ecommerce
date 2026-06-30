import styles from "./ProductPage.module.css";
import { useParams } from "react-router-dom";
import PRODUCTS from "../../data/productList";
import ScrollToTop from "../../util/ScrollToTop";
import PaymentCard from "./PaymentCard";
import { Link } from "react-router-dom";
import Product from "../BestSelling/Product";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { useLocation } from "react-router-dom";
import { removeLastSegment } from "../../util/util";


export default function ProductPage() {
    const dispatch=useDispatch();
    const location = useLocation();
  function getProductDetails(productId) {
    return PRODUCTS.find((product) => product.id === productId);
  }
  function addToCartHandler(dispatchedProduct) {
    dispatch(cartActions.addItemToCart(dispatchedProduct))
  }
  const { productId } = useParams();
  const product = getProductDetails(productId);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.main}>
        <ScrollToTop />

        <div className={styles.container}>
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          <div className={styles.infoSection}>
            <h2 className={styles.description}>{product.description}</h2>
            <div className={styles.price}>
              {product.onSale ? (
                <>
                  <span className={styles.oldPrice}>₹{product.price}</span>
                  <span className={styles.newPrice}>₹{product.salePrice}</span>
                </>
              ) : (
                <span className={styles.newPrice}>₹{product.price}</span>
              )}
            </div>

            <h5 className={styles.longDescription}>
              {product.longDescription}
            </h5>
            <div className={styles.addToCartButton}>
              <button onClick={()=>addToCartHandler(product)}>Add to Cart</button>
            </div>

            <h3 className={styles.category}>
              Category: <span>{product.category}</span>
            </h3>
            <div className={styles.paymentOptions}>
              <span className={styles.paymentLabel}>
                Guaranteed Safe Checkout
              </span>
              <div className={styles.PaymentCards}>
                <PaymentCard image="/creditCardsLogo/Visa.png" alt="Visa" />
                <PaymentCard
                  image="/creditCardsLogo/masterCard.png"
                  alt="Mastercard"
                />
                <PaymentCard
                  image="/creditCardsLogo/americanExpress.png"
                  alt="American Express"
                />
                <PaymentCard image="/creditCardsLogo/upi.png" alt="upi" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.relatedProducts}>
        <h2>Related Products : </h2>
        <div className={styles.relatedProductsContainer}>
            {PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4).map((relatedProduct, index) => (
              <Link to={`${removeLastSegment(location.pathname)}/${relatedProduct.id}`} key={index}>
                <Product
                  img={relatedProduct.image}
                  type={relatedProduct.category}
                  name={relatedProduct.name}
                  price={relatedProduct.price}
                  onSale={relatedProduct.onSale}
                  salePrice={relatedProduct.salePrice}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
