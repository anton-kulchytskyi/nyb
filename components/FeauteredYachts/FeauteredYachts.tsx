import typo from '@/styles/typography.module.scss'
import { Vessel } from '@/interfaces/vessel.interface';
import { getFeauteredYacht } from '@/utils/api/getAllVessels';
import FYCard from '../FYCard/FYCard';
import img_1 from '../../public/fyc_1.jpeg'
import img_2 from '../../public/fyc_2.jpeg'
import img_3 from '../../public/fyc_3.jpeg'
import styles from './feauteredYachts.module.scss';

const imgs = [img_1, img_2, img_3]

const FeauteredYachts = async () => {
  const yachts = await getFeauteredYacht();
  yachts.sort(() => Math.random() - 0.5);

  const visibleYachts = yachts.slice(0, 3);

  // console.log(yachts);
  
  return (
    <section className={styles.feature_section}>
      <div className={styles.title}>
        <h4 className={typo.typo_h4}>Feautered</h4>
        <h5 className={typo.typo_h5}>yachts</h5>
      </div>
      <span className={styles.seeall}>See All</span>
      <div className="cards_container">
        {visibleYachts.map((yacht: Vessel, i: number) =>(
          <FYCard key={yacht.vessel_id} yacht={yacht} photo={imgs[i]} linkTo='/catalog'/>
        ))}
      </div>
    </section>
  )
}

export default FeauteredYachts
