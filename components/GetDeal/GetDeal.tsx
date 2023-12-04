import Image from 'next/image';

import GetDealImg from '@/public/getdeal_img.png';

import { getDeal } from '@/utils/section_texts/getDeal';
import LogoOnPage from '../LogoOnPage/LogoOnPage';


import SectionText from '../SectionText/SectionText';
import styles from './getDeal.module.scss';

const GetDeal = () => {
  return (
    <section className={styles.getdeal_section}>
      <SectionText
        title={getDeal.title}
        title_2={getDeal.title_2}
        desc={getDeal.desc}
        button='Read more'
        white
        width
        descWidth
      />
      <span className={styles.logo}>
        <LogoOnPage number='200+' text='happy customers' color='#31455B' />
      </span>
      <Image
        src={GetDealImg}
        alt="Get Deal Image"
        className={styles.img}
      />
    </section>
  )
}

export default GetDeal
