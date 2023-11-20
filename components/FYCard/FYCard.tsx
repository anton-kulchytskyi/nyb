'use client';
import Image, { StaticImageData } from 'next/image';
import styles from './fycard.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';

import { Vessel } from '@/interfaces/vessel.interface';

interface Props {
  yacht: Vessel;
  photo: StaticImageData;
}

const FYCard = ({ yacht, photo }: Props) => {
  const [isHovering, setIsHovering] = useState(true);
  const {
    vesselMake, vesselPrice, vesselLocationCountry, vesselYear,
  } = yacht;

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
        <Button
          text='See Detail'
          linkTo='/catalog'
          primary
          center
          hover={isHovering}
        />
      </div>
      <p className={styles.card_title}>{vesselMake}</p>
      <p className={styles.card_price}>{`$ ${vesselPrice}`}</p>
      <p
        className={styles.card_desc}
      >{`${vesselLocationCountry} | ${vesselYear}`}</p>
    </div>
  );
};

export default FYCard;
