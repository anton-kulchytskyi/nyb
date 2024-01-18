'use client';
// import AWS from 'aws-sdk';
import Image from 'next/image';
// import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

// import { PromiseResult } from 'aws-sdk/lib/request';
import { useCurrency } from '@/context/CurrencyContext';
import { currencyArray } from '@/utils/currency/currencyArray';

import { fetchImgUrl } from '@/utils/api/getImageFromAWS';

import typo from '@/styles/typography.module.scss';
import { Vessel } from '@/interfaces/vessel.interface';
import Button from '../Button/Button';

import BtnExp from '../BtnExp/BtnExp';
import styles from './fycard.module.scss';

interface Props {
  yacht: Vessel;
  buttonsExample?: string;
  // photo: StaticImageData;
  inCatalog?: boolean;
}

const FYCard = ({ yacht, buttonsExample, inCatalog }: Props) => {
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
    }
    loadImgFromAws();
  }, [vessel_image_key]);

  // useEffect(() => {
  //   async function fetchImgUrl() {
  //     try {
  //       // Configure AWS SDK with the credentials and region
  //       AWS.config.update({
  //         accessKeyId: 'AKIAUXLH7DAVIEHB5FF2',
  //         secretAccessKey: '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',
  //         region: 'eu-north-1',
  //       });
  //       const s3 = new AWS.S3();
  //       const bucketName = 'nyb-basket';
  //       // Fetch the image from Amazon S3 based on the imageUrl from the good prop
  //       const s3Object: PromiseResult<AWS.S3.GetObjectOutput, AWS.AWSError> =
  //         await s3
  //           .getObject({ Bucket: bucketName, Key: vessel_image_key })
  //           .promise();
  //       let currImageUrl;
  //       if (s3Object.Body) {
  //         currImageUrl = URL.createObjectURL(
  //           new Blob([s3Object.Body as BlobPart])
  //         );
  //       } else {
  //         // Handle the case where s3Object.Body is undefined
  //         // eslint-disable-next-line
  //         console.error('S3 object body is undefined');
  //       }
  //       setImageUrl(currImageUrl as string);
  //     } catch (error) {
  //       // eslint-disable-next-line
  //       console.error('Error:', error);
  //     }
  //   }
  //   fetchImgUrl();
  // }, [vessel_image_key]);

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
        <p className={`${typo.typo_description} ${typo.typo_description_gray}`}>
          {`${vessel_country}, ${vessel_town} | ${vessel_year}`}
        </p>
      </div>
    </div>
  );
};

export default FYCard;
