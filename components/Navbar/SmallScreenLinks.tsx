import Link from 'next/link';
import MenuIcon from '../MenuIcon/MenuIcon';
import styles from './navbar.module.scss';

type Props = {
  isClose: boolean;
  closeHandler: () => void;
};

const SmallScreenLinks = ({ isClose, closeHandler }: Props) => {
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
          href="#contact"
          className={styles.link}
        >
          Contacts
        </Link>
      </div>
    </>
  );
};

export default SmallScreenLinks;
