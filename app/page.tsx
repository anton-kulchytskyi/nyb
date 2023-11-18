import FeauteredYachts from '@/components/FeauteredYachts/FeauteredYachts'
import styles from './page.module.scss'
import Header from '@/components/Header/Header'

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <FeauteredYachts />
      </main>
    </>
  )
}
