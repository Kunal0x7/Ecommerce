import styles from './HomePage.module.css'
import Hero from '../Hero'
import Features from '../Features'
import BestSelling from '../BestSelling/BestSelling'
import FreshProducts from '../FreshProducts/FreshProducts'
import CustomerReview from '../customerReviews/CustomerReview'
import FeaturedBrands from '../FeaturedBrands/FeaturedBrands'
export default function HomePage() {

  return (
     <main className={styles.main}>
        <Hero/>
        <Features/>
        <BestSelling isBestSelling={true}/>
        <FreshProducts/>
        <BestSelling isBestSelling={false}/>
        <CustomerReview />
        <FeaturedBrands />
     </main>
  )
}