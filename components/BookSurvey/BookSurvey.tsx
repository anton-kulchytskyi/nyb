import Image from 'next/image';

import BookImg from '@/public/book_img.png';

import { bookSurvey } from '@/utils/section_texts/book';
import LogoOnPage from '../LogoOnPage/LogoOnPage';

import SectionText from '../SectionText/SectionText';
import styles from './bookSurvey.module.scss';

const BookSurvey = () => {
  return (
    <section className={styles.book_section}>
      <SectionText
        title={bookSurvey.title}
        title_2={bookSurvey.title_2}
        desc={bookSurvey.desc}
        button='Read more'
        gray
        reverse
        left
      />
      <Image
        src={BookImg}
        alt="Book survey image"
        className={styles.img}
      />
      <span className={styles.logo}>
        <LogoOnPage number='24/7' text='support' color='#E7801A' />
      </span>
    </section>
  )
};

export default BookSurvey;
