import Header from '@/components/Header/Header';
import FeauteredYachts from '@/components/FeauteredYachts/FeauteredYachts';
import ChooseYourYacht from '@/components/ChooseYourYacht/ChooseYourYacht';
import BookSurvey from '@/components/BookSurvey/BookSurvey';
import GetDeal from '@/components/GetDeal/GetDeal';
import ContactForm from '@/components/ContactForm/ContactForm';
import ReviewsSection from '@/components/ReviewsSection/ReviewsSection';

import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <FeauteredYachts />
        <ChooseYourYacht />
        <BookSurvey />
        <GetDeal />
        <ContactForm />
        <ReviewsSection />
      </main>
    </>
  )
}
