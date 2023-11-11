'use client'
import Image, { StaticImageData } from 'next/image'
import styles from './fycard.module.css'
import Button from '../Button/page';
import { useState } from 'react';

type Props = {
  photo: StaticImageData;
}

const FYCard = ({photo} : Props) => {
  const [isHovering, setIsHovering] = useState(true);

  const handleMouseOver = () => {
    setIsHovering(false);
  };

  const handleMouseOut = () => {
    setIsHovering(true);
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.image_container}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Image alt="feature_img" src={photo} fill={true} className={styles.image} />
        <Button text="See Detail" linkTo="/catalog" primary absolute hover={isHovering}/>
      </div>
      <h5 className={styles.card_title}>Jeanneau 53</h5>
      <p className={styles.card_price}>$ 850,000</p>
      <p className={styles.card_desc}>Crotia | 2012</p>
    </div>
  )
}

export default FYCard