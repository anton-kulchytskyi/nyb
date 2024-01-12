import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Close from '@/public/icons/close.svg';
import Copy from '@/public/icons/copy.svg';

import SocialMediaIcons from '@/components/SocialMediaIcons/SocialMediaIcons';
import typo from '@/styles/typography.module.scss';
import styles from './contactsModal.module.scss';

type Props = {
  isContactsModalOpen: boolean;
  contactsModalHandler: () => void;
};

const ContactsModal = ({
  isContactsModalOpen,
  contactsModalHandler,
}: Props) => {
  const pathname = usePathname();
  const tel1 = '+380632345521';
  const tel2 = '+380677129333';
  const color = '#4D6575';

  return (
    <div
      className={`${styles.modal} ${isContactsModalOpen ? styles.open : ''}`}
    >
      <div className={styles.modal__wrapper}>
        <div className={styles.modal__content}>
          <Link
            href={pathname}
            onClick={contactsModalHandler}
            className={styles.close}
          >
            <Image
              src={Close}
              alt="Close"
            />
          </Link>
          <h4 className={typo.typo_h4}>Contacts</h4>
          <div className={styles.phone}>
            <a href={`tel:${tel1}`}>{tel1}</a>
            <Image
              src={Copy}
              alt="Copy"
            />
          </div>
          <div className={styles.phone}>
            <a href={`tel:${tel2}`}>{tel2}</a>
            <Image
              src={Copy}
              alt="Copy"
            />
          </div>
          <div className={styles.social}>
            <SocialMediaIcons color={color} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsModal;
