'use client';
import { useRouter } from 'next/navigation';
import { Vessel } from '@/interfaces/vessel.interface';
import CloseSvg from '@/components/SvgIconsComponents/CloseSvg';
import ProductCardGallerySlider from '@/components/ProductCard/ProductCardGallerySlider/ProductCardGallerySlider';
import YachtPrice from '@/components/YachtPrice/YachtPrice';
import styles from './ProductCardGallery.module.scss';

type Props = {
  yacht: Vessel;
  images: string[];
};

const ProductCardGallery = ({ yacht, images }: Props) => {
  const router = useRouter();
  const {
    yacht_price,
    yacht_make,
    yacht_model,
    yacht_country,
    yacht_town,
    yacht_year,
    yacht_cabin,
    yacht_berth,
    yacht_shower,
  } = yacht;
  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__container}>
        <div className={styles.row}>
          <div className={styles.triple_col}>
            <div className={styles.gallery__slider}>
              <button
                className={styles.slider__closeButton}
                type="button"
                onClick={() => router.back()}
              >
                <CloseSvg color={'#fff'} />
              </button>
              <ProductCardGallerySlider images={images} />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.gallery__side}>
              <h4 className={styles.gallery__side__title}>{yacht_make}</h4>
              <h4 className={styles.gallery__side__title}>{yacht_model}</h4>
              <span
                className={styles.gallery__side__place}
              >{`${yacht_country}, ${yacht_town}`}</span>
              <div className={styles.gallery__side__info}>
                <p className={styles.line}>
                  <span className={styles.line__name}>Price:</span>
                  <span className={styles.line__price}>
                    <YachtPrice
                      price={yacht_price}
                    />
                  </span>
                </p>
                <p className={styles.line}>
                  <span className={styles.line__name}>Year:</span>
                  <span className={styles.line__value}>{yacht_year}</span>
                </p>
                <p className={styles.line}>
                  <span className={styles.line__name}>Cabin:</span>
                  <span className={styles.line__value}>{yacht_cabin}</span>
                </p>
                <p className={styles.line}>
                  <span className={styles.line__name}>Berth:</span>
                  <span className={styles.line__value}>{yacht_berth}</span>
                </p>
                <p className={styles.line}>
                  <span className={styles.line__name}>Toilets:</span>
                  <span className={styles.line__value}>{yacht_shower}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardGallery;
