import { Vessel } from '@/interfaces/vessel.interface';
import { getFeauteredYacht } from '@/utils/api/getAllVessels';

import typo from '@/styles/typography.module.scss';

import img_1 from '../../public/fyc_1.jpeg';
import img_2 from '../../public/fyc_2.jpeg';
import img_3 from '../../public/fyc_3.jpeg';

import FYCard from '../FYCard/FYCard';
import TextButton from '../TextButton/TextButton';

import styles from './feauteredYachts.module.scss';

const imgs = [img_1, img_2, img_3];
const buttonsExample = ['Top 3', 'Hot Price', 'Low Price'];

const FeauteredYachts = async () => {
  const yachts = await getFeauteredYacht();
  yachts.sort(() => Math.random() - 0.5);

  const visibleYachts = yachts.slice(0, 3);

  return (
    <section className={styles.feature_section}>
      <div className={styles.title}>
        <h4 className={typo.typo_h4}>Feautered</h4>
        <h5 className={typo.typo_h5}>yachts</h5>
      </div>
      <span className={styles.seeall}>
        <TextButton
          text="See All"
          linkTo='/catalog'
          primary
        />
      </span>
      <div className={styles.cards_container}>
        {visibleYachts.map((yacht: Vessel, i: number) =>(
          <FYCard
            key={yacht.vessel_id}
            yacht={yacht}
            buttonsExample={buttonsExample[i]}
            photo={imgs[i]}
          />
        ))}
      </div>
    </section>
  )
}

export default FeauteredYachts
