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
    yacht_id,
    yacht_make,
    yacht_model,
    yacht_country,
    yacht_town,
    yacht_year,
    yacht_main_image_key,
  } = yacht;

  const key = `yacht_price_${selectedCurrency}`;
  const currPrice = (+yacht[key]).toLocaleString('en-US');

  useEffect(() => {
    async function loadImgFromAws() {
      const currImg = await fetchImgUrl(yacht_main_image_key);
      setImageUrl(currImg || 'https://fakeimg.pl/600x400?text=Norse+Yacht+Co.');
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
    loadImgFromAws();
  }, [yacht_main_image_key]);

  const routeToVessel = () => {
    router.push(`/catalogue/${yacht_id}?name=${yacht_make}`);
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
                linkTo={`/catalogue/${yacht_id}`}
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
              href={{
                pathname: `/catalogue/${yacht_id}`,
                query: { name: yacht_make },
              }}
              as={`/catalogue/${yacht_id}`}
              // >{`${yacht_make} ${yacht_model}`}</Link>
            >
              <span>{yacht_make}</span>
              <br />
              <span>{yacht_model}</span>
            </Link>
            <p
              className={typo.typo_price}
            >{`${selectedCurrencySymbol} ${currPrice}`}</p>
            <p
              className={`${typo.typo_description} ${typo.typo_description_gray}`}
            >
              {`${yacht_country}, ${yacht_town} | ${yacht_year}`}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FYCard;
