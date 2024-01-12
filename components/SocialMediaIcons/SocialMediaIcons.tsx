import Link from 'next/link';

import InstagramSvg from '@/components/SvgIconsComponents/InstagramSvg';
import TelegramSvg from '@/components/SvgIconsComponents/TelegramSvg';
import WhatsAppSvg from '@/components/SvgIconsComponents/WhatsAppSvg';

import styles from './socialMediaIcons.module.scss';

type Props = {
  color: string;
};

const SocialMediaIcons = ({ color }: Props) => {
  return (
    <>
      <Link
        href="#"
        className={styles.icon}
      >
        <InstagramSvg color={color} />
      </Link>
      <Link
        href="#"
        className={styles.icon}
      >
        <TelegramSvg color={color} />
      </Link>
      <Link
        href="#"
        className={styles.icon}
      >
        <WhatsAppSvg color={color} />
      </Link>
    </>
  );
};

export default SocialMediaIcons;
