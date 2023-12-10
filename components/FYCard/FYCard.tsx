'use client';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import typo from '@/styles/typography.module.scss'
import { Vessel } from '@/interfaces/vessel.interface';
import Button from '../Button/Button';
import styles from './fycard.module.scss';

interface Props {
  yacht: Vessel;
  photo: StaticImageData;
  linkTo: string;
}

const FYCard = ({ yacht, photo, linkTo }: Props) => {
  const [isHovering, setIsHovering] = useState(true);
  const {
    vessel_make,
    vessel_price,
    vessel_country,
    vessel_year,
    vessel_id
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
          linkTo={linkTo}
          primary
          center
          hover={isHovering}
        />
      </div>
      <p className={typo.typo_name_yacht}>{vessel_make} -- {vessel_id}</p>
      <p className={typo.typo_price}>{`$ ${vessel_price}`}</p>
      <p
        className={`${typo.typo_description} ${typo.typo_description_gray}`}
        // style={{color: '#525659'}}
        // style={{ color:` ${$gray-100}` }}
      >{`${vessel_country} | ${vessel_year}`}</p>
    </div>
  );
};

export default FYCard;
