import Header from '@/components/Header/Header'
import FeauteredYachts from '@/components/FeauteredYachts/FeauteredYachts'
import ContactSection from '@/components/ContactSection/ContactSection'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <FeauteredYachts />
        <ContactSection />
      </main>
    </>
  )
}
