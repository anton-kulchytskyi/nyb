import styles from './feauteredYachts.module.css'
import img_1 from '../../public/fyc_1.jpeg'
import img_2 from '../../public/fyc_2.jpeg'
import img_3 from '../../public/fyc_3.jpeg'
import FYCard from '../FYCard/page'

const imgs = [img_1, img_2, img_3]

const FeauteredYachts = () => {
  return (
    <section className={styles.feature_section}>
      <h4 className={styles.title}>Feautered</h4>
      <div className={styles.cards_container}>
        {imgs.map((img, i) => (
          <FYCard
          key={i}
          photo={img}
           />
        ))}
      </div>
    </section>
  )
}

export default FeauteredYachts