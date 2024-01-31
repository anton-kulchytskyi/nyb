import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import SocialMediaIcons from '@/components/SocialMediaIcons/SocialMediaIcons';
import Button from '@/components/Button/Button';

import Close from '@/public/icons/close.svg';
import typo from '@/styles/typography.module.scss';
import styles from './contactFormModal.module.scss';
type Props = {
  isContactFormModalOpen: boolean;
  setIsContactFormModalOpen: Dispatch<SetStateAction<boolean>>;
};

const ContactFormModal = ({
  isContactFormModalOpen,
  setIsContactFormModalOpen,
}: Props) => {
  const pathname = usePathname();
  const color = '#4D6575';
  return (
    <div
      className={`${styles.modal} ${isContactFormModalOpen ? styles.open : ''}`}
    >
      <div className={styles.modal__content}>
        <Link
          href={pathname}
          onClick={() => setIsContactFormModalOpen(!isContactFormModalOpen)}
          className={styles.close}
        >
          <Image
            src={Close}
            alt="Close"
          />
        </Link>
        <h4 className={typo.typo_h4}>Thank you for getting in touch</h4>
        <p className={typo.typo_description}>You will be contacted shortly</p>
        <Button
          text="Return to the main page"
          linkTo="/"
        />
        <div className={styles.social}>
          <SocialMediaIcons color={color} />
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;
