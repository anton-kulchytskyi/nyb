import styles from './feauteredYachts.module.scss';
import FYCard from '../FYCard/FYCard';
import { Vessel } from '@/interfaces/vessel.interface';

import { getFeauteredYacht } from '../../utils/api/getAllVessels';

import img_1 from '../../public/fyc_1.jpeg'
import img_2 from '../../public/fyc_2.jpeg'
import img_3 from '../../public/fyc_3.jpeg'

const imgs = [img_1, img_2, img_3]

const FeauteredYachts = async () => {
  const yachts = await getFeauteredYacht();
  yachts.sort(() => Math.random() - 0.5);

  const visibleYachts = yachts.slice(0, 3);

  // console.log(visibleYachts);
  
  return (
    <section className={styles.feature_section}>
      <div className={styles.title}>
        <h4>Feautered</h4>
        <h5>yachts</h5>
      </div>
      <span className={styles.seeall}>See All</span>
      <div className={styles.cards_container}>
        {visibleYachts.map((yacht: Vessel, i: number) =>(
          <FYCard key={yacht.id} yacht={yacht} photo={imgs[i]}/>
        ))}
      </div>
    </section>
  )
}

export default FeauteredYachts
