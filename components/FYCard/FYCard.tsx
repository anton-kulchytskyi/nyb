'use client';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import typo from '@/styles/typography.module.scss'
import { Vessel } from '@/interfaces/vessel.interface';
import Button from '../Button/Button';

import BtnExp from '../BtnExp/BtnExp';
import styles from './fycard.module.scss';

interface Props {
  yacht: Vessel;
  buttonsExample: string;
  photo: StaticImageData;
}

const FYCard = ({ 
  yacht,
  buttonsExample,
  photo }: Props) => {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(true);
  const {
    vessel_id,
    vessel_make,
    vessel_model,
    vessel_price,
    vessel_country,
    vessel_town,
    vessel_year,
  } = yacht;

  const handleMouseOver = () => {
    setIsHovering(false);
  };

  const handleMouseOut = () => {
    setIsHovering(true);
  };

  const routeToVessel = () => {
    router.push(`/catalog/${vessel_id}`);
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.image_container}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={routeToVessel}
      >
        <Image
          src={photo}
          fill
          sizes="100vw"
          className={styles.image}
          alt="feature_img"
        />
        <span className={styles.top_right}>
          <BtnExp text={buttonsExample} linkTo={`/catalog/${vessel_id}`}></BtnExp>
        </span>
        <span className={`${styles.center} ${isHovering ? styles.center__is_hover : ''}`}>
          <Button
            text='See Detail'
            linkTo={`/catalog/${vessel_id}`}
            primary
          />
        </span>
      </div>
      <div className={styles.card__desc}>
        <p className={typo.typo_name_yacht}>
          {`${vessel_make} ${vessel_model}`}
        </p>
        <p className={typo.typo_price}>
          {`$ ${vessel_price}`}
        </p>
        <p
          className={`${typo.typo_description} ${typo.typo_description_gray}`}
        >
          {`${vessel_country} | ${vessel_town} | ${vessel_year}`}
        </p>
      </div>
    </div>
  );
};

export default FYCard;
