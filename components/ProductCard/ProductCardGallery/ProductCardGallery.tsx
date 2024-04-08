'use client';
import { useRouter } from 'next/navigation';
import Fullscreen from 'react-fullscreen-crossbrowser';
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
  const { isFullscreenEnabled, setIsFullscreenEnabled } = useFullscreen();
  const { yacht_price, yacht_make, yacht_model } = yacht;
  const closeButtonFunc = () => {
    router.back();
    setIsFullscreenEnabled(!isFullscreenEnabled);
  };

  return (
    <Fullscreen
      enabled={isFullscreenEnabled}
      onChange={() => setIsFullscreenEnabled(!isFullscreenEnabled)}
    >
      <div
        // id="card-gallery"
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
              {yacht_make} {yacht_model} <YachtPrice price={yacht_price} />
            </h4>

            <ProductCardGallerySlider images={images} />
          </div>
        </div>
      </div>
    </Fullscreen>
  );
};

export default ProductCardGallery;
