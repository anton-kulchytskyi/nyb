import typo from '@/styles/typography.module.scss';

import { reviewUser } from '@/interfaces/reviewsUsers.interface';
import { users } from '@/utils/reviewsUsers/reviewsUsers';

import ReviewCard from '../ReviewsCard/ReviewCard';
import styles from './reviewsSection.module.scss';

const ReviewsSection = () => {
  return (
    <section
      id="reviews"
      className={styles.review_section}
    >
      <h3 className={`${typo.typo_h3} ${typo.typo_h3_gray}`}>Reviews</h3>
      <div className={styles.cards_container}>
        {users.map((user: reviewUser) => (
          <ReviewCard
            key={user.userId}
            userName={user.userName}
            userAvatar={user.userAvatar}
            date={user.date}
            reviewText={user.reviewText}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
