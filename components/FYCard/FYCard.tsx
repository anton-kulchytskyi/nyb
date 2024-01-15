'use client';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { useCurrency } from '@/context/CurrencyContext';
import { currencyArray } from '@/utils/currency/currencyArray';

import typo from '@/styles/typography.module.scss';
import { Vessel } from '@/interfaces/vessel.interface';
import Button from '../Button/Button';

import BtnExp from '../BtnExp/BtnExp';
import styles from './fycard.module.scss';

interface Props {
  yacht: Vessel;
  buttonsExample?: string;
  photo: StaticImageData;
  inCatalog?: boolean;
}

const FYCard = ({ yacht, buttonsExample, photo, inCatalog }: Props) => {
  const router = useRouter();
  const { selectedCurrency } = useCurrency();
  const [isHovering, setIsHovering] = useState(true);
  const {
    vessel_id,
    vessel_make,
    vessel_model,
    vessel_country,
    vessel_town,
    vessel_year,
  } = yacht;

  const key = `vessel_price_${selectedCurrency}`;

  const currPrice = yacht[key];

  const currCurrency = currencyArray.find(
    (obj) => obj.currencyName === selectedCurrency
  )?.symbol;

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
    <div
      className={styles.card}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={routeToVessel}
    >
      <div
        className={`${styles.image_container} ${
          inCatalog ? styles.image_catalog_container : ''
        }`}
      >
        <Image
          src={photo}
          fill
          sizes="100vw"
          className={styles.image}
          alt="feature_img"
        />
        <span className={styles.top_right}>
          <BtnExp
            text={buttonsExample ? buttonsExample : ''}
            linkTo={`/catalog/${vessel_id}`}
          ></BtnExp>
        </span>
        <span
          className={`${styles.center} ${
            isHovering ? styles.center__is_hover : ''
          }`}
        >
          <Button
            text="See Detail"
            linkTo={`/catalog/${vessel_id}`}
            primary
          />
        </span>
      </div>
      <div
        className={`${
          inCatalog ? styles.card__desc_catalog : styles.card__desc
        }`}
      >
        <p className={typo.typo_name_yacht}>
          {`${vessel_make} ${vessel_model}`}
        </p>
        <p className={typo.typo_price}>{`${currCurrency} ${currPrice}`}</p>
        <p className={`${typo.typo_description} ${typo.typo_description_gray}`}>
          {`${vessel_country}, ${vessel_town} | ${vessel_year}`}
        </p>
      </div>
    </div>
  );
};

export default FYCard;
