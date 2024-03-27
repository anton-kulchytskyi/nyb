'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { fetchImgUrl } from '@/utils/api/getImageFromAWS';
import typo from '@/styles/typography.module.scss';
import { Vessel } from '@/interfaces/vessel.interface';
import YachtPrice from '../YachtPrice/YachtPrice';
import Button from '../Button/Button';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import styles from './fycard.module.scss';

interface Props {
  yacht: Vessel;
  inCatalog?: boolean;
}

const FYCard = ({ yacht, inCatalog }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState<string>('');
  const {
    yacht_id,
    yacht_price,
    yacht_price_old,
    yacht_main_image_key,
    yacht_make,
    yacht_model,
    yacht_country,
    yacht_town,
    yacht_year,
  } = yacht;

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

  const showOldPrice = yacht_price_old > yacht_price;

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
            <span className={styles.top_right}>
              {showOldPrice ? 'hot price' : 'top 3'}
            </span>
            <span className={styles.center}>
              <Button
                text="See Detail"
                linkTo={`/catalogue/${yacht_id}?name=${yacht_make}`}
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
            >
              <span>{yacht_make}</span>
              <br />
              <span>{yacht_model}</span>
            </Link>
            <span className={styles.price}>
              <YachtPrice
                price={yacht_price}
                old_price={yacht_price_old}
              />
            </span>
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
