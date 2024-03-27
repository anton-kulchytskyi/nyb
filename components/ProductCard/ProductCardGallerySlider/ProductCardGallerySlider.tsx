'use client';
import Image from 'next/image';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import styles from './ProductCardGallerySlider.module.scss';

type ProductCardGallerySliderProps = {
  images: string[];
};

const ProductCardGallerySlider = ({
  images,
}: ProductCardGallerySliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.gallerySwiper}
      >
        {images.map((img) => (
          <SwiperSlide key={img}>
            <Image
              src={img}
              fill
              alt="gallery_slider_img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.gallerySwiper__thumbs}
      >
        {images.map((img) => (
          <SwiperSlide key={img}>
            <Image
              src={img}
              fill
              alt="gallery_slider_img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductCardGallerySlider;
