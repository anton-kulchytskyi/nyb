import FeaturedYachts from '@/components/FeauteredYachts/page'
import styles from './page.module.css'
import Header from '@/components/Header/page'

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <FeaturedYachts />
      </main>
    </>
  )
}
