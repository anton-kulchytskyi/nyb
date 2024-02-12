'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { useCurrency } from '@/context/CurrencyContext';
import { Vessel } from '@/interfaces/vessel.interface';
import Button from '@/components/Button/Button';
import CardSkeleton from '@/components/CardSkeleton/CardSkeleton';

import typo from '@/styles/typography.module.scss';
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
  const {
    vessel_id,
    vessel_make,
    vessel_model,
    vessel_country,
    vessel_town,
    vessel_year,
    vessel_image_url,
  } = yacht;

  const key = `vessel_price_${selectedCurrency}`;
  const currPrice = (+yacht[key]).toLocaleString('en-US');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []); // Simulating a 1,5-second delay

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
              src={
                vessel_image_url ||
                'https://fakeimg.pl/600x400?text=Norse+Yacht+Co.'
              }
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
