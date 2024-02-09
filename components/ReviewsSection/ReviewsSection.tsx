'use client';
import dynamic from 'next/dynamic';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

import { reviewUser } from '@/interfaces/reviewsUsers.interface';
import { users } from '@/utils/reviewsUsers/reviewsUsers';

const ReviewCardNoSSR = dynamic(
  () => import('@/components/ReviewsSection/ReviewsCard/ReviewCard'),
  { ssr: false }
);

import typo from '@/styles/typography.module.scss';
import styles from './reviewsSection.module.scss';

const ReviewsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1730,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1410,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="reviews"
      className={styles.review_section}
    >
      <h3 className={`${typo.typo_h3} ${typo.typo_h3_gray}`}>Reviews</h3>
      <Slider {...settings}>
        {users.map((user: reviewUser) => (
          <ReviewCardNoSSR
            sliderIdx={user.sliderIdx}
            key={user.userId}
            userName={user.userName}
            userAvatar={user.userAvatar}
            date={user.date}
            stars={user.stars}
            reviewText={user.reviewText}
          />
        ))}
      </Slider>
    </section>
  );
};

export default ReviewsSection;
