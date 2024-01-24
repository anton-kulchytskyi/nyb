'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { useCurrency } from '@/context/CurrencyContext';
import { fetchImgUrl } from '@/utils/api/getImageFromAWS';

import typo from '@/styles/typography.module.scss';
import { Vessel } from '@/interfaces/vessel.interface';
import Button from '../Button/Button';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import styles from './fycard.module.scss';

interface Props {
  yacht: Vessel;
  buttonsExample?: string;
  inCatalog?: boolean;
}

const FYCard = ({ yacht, buttonsExample, inCatalog }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { selectedCurrency, selectedCurrencySymbol } = useCurrency();
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

  useEffect(() => {
    async function loadImgFromAws() {
      const currImg = await fetchImgUrl(vessel_image_key);
      setImageUrl(currImg || 'https://fakeimg.pl/600x400?text=Norse+Yacht+Co.');
      setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Simulating a 3-second delay
    }
    loadImgFromAws();
  }, [vessel_image_key]);

  const routeToVessel = () => {
    router.push(`/catalog/${vessel_id}`);
  };

  return (
    <div className={styles.card}>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <>
          <div
            className={`${styles.image_container} ${
              inCatalog ? styles.image_catalog_container : ''
            }`}
            onClick={routeToVessel}
          >
            <Image
              src={imageUrl}
              fill
              sizes="100vw"
              className={styles.image}
              alt="feature_img"
            />
            {buttonsExample && (
              <span className={styles.top_right}>{buttonsExample}</span>
            )}
            <span className={styles.center}>
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
            <Link
              className={typo.typo_name_yacht}
              href={`/catalog/${vessel_id}`}
            >{`${vessel_make} ${vessel_model}`}</Link>
            <p
              className={typo.typo_price}
            >{`${selectedCurrencySymbol} ${currPrice}`}</p>
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
