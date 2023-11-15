import styles from './feauteredYachts.module.css'
import img_1 from '../../public/fyc_1.jpeg'
import img_2 from '../../public/fyc_2.jpeg'
import img_3 from '../../public/fyc_3.jpeg'
import FYCard from '../FYCard/page'

import { getFeauteredYacht } from '../../utils/api/getAllVessels';

const imgs = [img_1, img_2, img_3]

const FeauteredYachts = async () => {
  const yachts = await getFeauteredYacht();

  const visibleYachts = yachts.map((yacht: any, i: number) => {
    return ({
      vesselMake: yacht.vesselMake,
      vesselPrice: yacht.vesselPrice,
      vesselLocationCountry: yacht.vesselLocationCountry,
      vesselYear: yacht.vesselYear,
      img: imgs[i],
    })
  }).slice(0, 3)
  // console.log(yachts);
  
  return (
    <section className={styles.feature_section}>
      <h4 className={styles.title}>Feautered</h4>
      <div className={styles.cards_container}>
        {/* {imgs.map((img, i) => (
          <FYCard
          key={i}
          photo={img}
           />
        ))} */}
        {visibleYachts.map((el: any, i: number) => (
          <FYCard
          key={i}
          vesselMake={el.vesselMake}
          vesselPrice={el.vesselPrice}
          vesselLocationCountry={el.vesselLocationCountry}
          vesselYear={el.vesselYear}
          photo={el.img}
           />
        ))}
      </div>
    </section>
  )
}

export default FeauteredYachts