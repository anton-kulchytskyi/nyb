import Header from '@/components/Header/Header'
import FeauteredYachts from '@/components/FeauteredYachts/FeauteredYachts'
import AllSectionComponents from '@/components/SectionComponent/SectionComponent'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <FeauteredYachts />
        <AllSectionComponents />
      </main>
    </>
  )
}
