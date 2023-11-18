import Link from 'next/link';
import Image from 'next/image';

import styles from './socialmedia.module.scss';

import InstaIcon from '@/public/icons/insta.svg';
import TelegramIcon from '@/public/icons/telegram.svg';
import YoutubeIcon from '@/public/icons/youtube.svg';

const SocialMedia = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Social media</span>
      <div>
        <Link
          href="/"
          className={styles.icon}
        >
          <Image src={InstaIcon} alt="Insta_logo" />
        </Link>
        <Link
          href="/"
          className={styles.icon}
        >
          <Image src={TelegramIcon} alt="telegram_logo" />
        </Link>
        <Link
          href="/"
          className={styles.icon}
        >
          <Image src={YoutubeIcon} alt="Youtube_logo" />
        </Link>
      </div>
    </div>
  )
}

export default SocialMedia