import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Slider.module.scss';

function CustomPaging({ images }: { images: string[] }) {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.slider__container}>
      <div className={styles.slider}>
        <Slider {...settings}>
          {images.map(img => (
            <div key={img} className={styles.slider__image_container}>
              <div className={styles.slider__image} style={{ backgroundImage: `url(${img})` }}/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CustomPaging;
