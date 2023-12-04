import Image from 'next/image';

import ChooseImg from '@/public/choose_img.png';

import { chooseYourYacht } from '@/utils/section_texts/choose';
import LogoOnPage from '../LogoOnPage/LogoOnPage';


import SectionText from '../SectionText/SectionText';
import styles from './chooseYourYacht.module.scss';


const ChooseYourYacht = () => {
  return (
    <section className={styles.choose_section}>
      <SectionText
        title={chooseYourYacht.title}
        title_2={chooseYourYacht.title_2}
        desc={chooseYourYacht.desc}
        button='Read more'
        white
      />
      <span className={styles.logo}>
        <LogoOnPage number='100+' text='Yachts' color='#31455B' />
      </span>
      <Image
        src={ChooseImg}
        alt="Choose your yacht image"
        className={styles.img}
      />
    </section>
  )
};

export default ChooseYourYacht;
