'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { useCurrency } from '@/context/CurrencyContext';
import { currencyArray } from '@/utils/currency/currencyArray';

import { fetchImgUrl } from '@/utils/api/getImageFromAWS';

import typo from '@/styles/typography.module.scss';
import { Vessel } from '@/interfaces/vessel.interface';
import Button from '../Button/Button';

import BtnExp from '../BtnExp/BtnExp';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import styles from './fycard.module.scss';

interface Props {
  yacht: Vessel;
  buttonsExample?: string;
  // photo: StaticImageData;
  inCatalog?: boolean;
}

const FYCard = ({ yacht, buttonsExample, inCatalog }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { selectedCurrency } = useCurrency();
  const [isHovering, setIsHovering] = useState(true);
  const [imageUrl, setImageUrl] = useState<string>('');
  const {
    vessel_id,
    vessel_make,
    vessel_model,
    vessel_country,
    vessel_town,
    vessel_year,
    vessel_image_key,
  } = yacht;

  const key = `vessel_price_${selectedCurrency}`;

  const currPrice = yacht[key];

  const currCurrency = currencyArray.find(
    (obj) => obj.currencyName === selectedCurrency
  )?.symbol;

  useEffect(() => {
    async function loadImgFromAws() {
      const currImg = await fetchImgUrl(vessel_image_key);
      setImageUrl(currImg);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Simulating a 2-second delay
    }
    loadImgFromAws();
  }, [vessel_image_key]);

  const handleMouseOver = () => {
    setIsHovering(false);
  };

  const handleMouseOut = () => {
    setIsHovering(true);
  };

  const routeToVessel = () => {
    router.push(`/catalog/${vessel_id}`);
  };

  // eslint-disable-next-line
  console.log(imageUrl);

  return (
    <div
      className={styles.card}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={routeToVessel}
    >
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <>
          <div
            className={`${styles.image_container} ${
              inCatalog ? styles.image_catalog_container : ''
            }`}
          >
            <Image
              src={imageUrl}
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
            <p
              className={`${typo.typo_description} ${typo.typo_description_gray}`}
            >
              {`${vessel_country}, ${vessel_town} | ${vessel_year}`}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FYCard;
