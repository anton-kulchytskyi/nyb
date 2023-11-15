import FeauteredYachts from '@/components/FeauteredYachts/page'
import styles from './page.module.scss'
import Header from '@/components/Header/page'

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        {/* <FeauteredYachts /> */}
      </main>
    </>
  )
}
