import styles from './Products.module.css'

export default function Products({ img, type, name, price, onSale, salePrice }) {
    return (
        <div className={styles.main}>
            <div className={styles.imageWrapper}>
                <img src={img} alt={name}/>
                {onSale && <span className={styles.saleBadge}><h3>sale</h3></span>}
            </div>
            <p className={styles.type}>{type}</p>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.priceRow}>
                {onSale ? (
                    <>
                        <span className={styles.oldPrice}>£{price}</span>
                        <span className={styles.newPrice}>£{salePrice}</span>
                    </>
                ) : (
                    <span className={styles.newPrice}>£{price}</span>
                )}
            </div>
        </div>
    )
}