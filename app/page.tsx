import Header from '@/components/Header/Header'
import FeauteredYachts from '@/components/FeauteredYachts/FeauteredYachts'
import ReviewsSection from '@/components/ReviewsSection/ReviewsSection'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <FeauteredYachts />
        <ReviewsSection />
      </main>
    </>
  )
}
