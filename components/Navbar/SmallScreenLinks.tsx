import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuIcon from '@/components/MenuIcon/MenuIcon';
import styles from './navbar.module.scss';

type Props = {
  isClose: boolean;
  closeHandler: () => void;
  contactsModalHandler: () => void;
};

const SmallScreenLinks = ({
  isClose,
  closeHandler,
  contactsModalHandler,
}: Props) => {
  const pathname = usePathname();
  return (
    <>
      <div className={styles.navbar__side}>
        <MenuIcon
          isClose={isClose}
          closeHandler={closeHandler}
        />
      </div>
      <div className={styles.navbar__side}>
        <Link
          href={pathname}
          className={styles.link}
          onClick={contactsModalHandler}
        >
          Contacts
        </Link>
      </div>
    </>
  );
};

export default SmallScreenLinks;
