import Image from "next/image";

import { reviewUser } from '@/interfaces/reviewsUsers.interface';

import StarImg from '@/public/icons/star.svg';
import QuotesImg from '@/public/icons/quotes.svg';
import styles from "./reviewCard.module.scss";



const numbers = [1, 2, 3, 4, 5];

type User = Omit<reviewUser, 'userId'>

const ReviewCard = ({
  userName, userAvatar, date, reviewText
}: User) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__text}>
        {numbers.map((number) => (
          <Image
            key={number}
            src={StarImg}
            alt='Star Image'
          />
        ))}
        <p className={styles.container__text_review}>
          {reviewText}
        </p>
        <div className={styles.container__text_quotes}>
          <Image
            src={QuotesImg}
            alt='QuotesImg'
          />
        </div>
      </div>
      <div className={styles.container__avatar}>
        <Image
          src={userAvatar}
          alt='user'
        />
        <div>
          <p className={styles.container__avatar_name}>
            {userName}
          </p>
          <p className={styles.container__avatar_date}>
            {date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard;
