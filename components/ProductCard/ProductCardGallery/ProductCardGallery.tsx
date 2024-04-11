'use client';

import { useRouter } from 'next/navigation';
import { useFullscreen } from '@/context/FullscreenContext';
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
  const { fullscreenRef, exitFullscreen } = useFullscreen();
  const { yacht_price, yacht_make, yacht_model } = yacht;
  const closeButtonFunc = () => {
    router.back();
    exitFullscreen();
  };

  return (
    <div
      ref={fullscreenRef}
      className={styles.gallery}
    >
      <button
        className={styles.gallery__closeButton}
        type="button"
        onClick={closeButtonFunc}
      >
        <CloseSvg color={'#fff'} />
      </button>
      <div className={styles.gallery__container}>
        <div className={styles.gallery__slider}>
          <h4 className={styles.gallery__title}>
            {yacht_make} {yacht_model}
          </h4>
          <YachtPrice price={yacht_price} />
          <ProductCardGallerySlider images={images} />
        </div>
      </div>
    </div>
  );
};

export default ProductCardGallery;
