'use client';
import dynamic from 'next/dynamic';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

import { reviewUser } from '@/interfaces/reviewsUsers.interface';
import { users } from '@/utils/reviewsUsers/reviewsUsers';

import { sliderSettings } from '@/utils/reviewsSlider/reviewsSliderSettings';

const ReviewCardNoSSR = dynamic(
  () => import('@/components/ReviewsSection/ReviewsCard/ReviewCard'),
  { ssr: false }
);

import typo from '@/styles/typography.module.scss';
import styles from './reviewsSection.module.scss';

const ReviewsSection = () => {
  return (
    <section className={styles.review_section}>
      <h3 className={`${typo.typo_h3} ${typo.typo_h3_gray}`}>Reviews</h3>
      <Slider {...sliderSettings}>
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
