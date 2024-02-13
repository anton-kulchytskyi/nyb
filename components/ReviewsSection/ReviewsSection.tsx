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
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1410,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      // id="reviews"
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
