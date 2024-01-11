import Header from '@/components/Header/Header';
import FeauteredYachts from '@/components/FeauteredYachts/FeauteredYachts';
import AllSectionComponents from '@/components/SectionComponent/SectionComponent';
import ContactSection from '@/components/ContactSection/ContactSection';
import ReviewsSection from '@/components/ReviewsSection/ReviewsSection';

import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <FeauteredYachts />
        <AllSectionComponents />
        <ContactSection />
        <ReviewsSection />
      </main>
    </>
  );
}
