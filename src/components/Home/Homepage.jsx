import styles from './HomePage.module.css'
import Hero from '../Hero'
import FloatingCart from '../FloatingCart'
import Features from '../Features'
import BestSelling from '../BestSelling/BestSelling'
import FreshProducts from '../FreshProducts/FreshProducts'
import CustomerReview from '../customerReviews/customerReview'
import FeaturedBrands from '../FeaturedBrands/FeaturedBrands'
export default function HomePage() {

  return (
     <main className={styles.main}>
        <Hero/>
        <FloatingCart/>
        <Features/>
        <BestSelling isBestSelling={true}/>
        <FreshProducts/>
        <BestSelling isBestSelling={false}/>
        <CustomerReview />
        <FeaturedBrands />
     </main>
  )
}