import { motion } from 'framer-motion';
import Link from 'next/link';

import { navbarLinksArray } from '@/utils/links/navbarLinksArray';
import styles from './menuMobileModal.module.scss';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

type Props = {
  isClose: boolean;
  closeHandler: () => void;
};

const MenuMobileModal = ({ isClose, closeHandler }: Props) => {
  return (
    <motion.div
      className={styles.modal}
      animate={isClose ? 'open' : 'closed'}
      variants={variants}
    >
      {navbarLinksArray.map((link) => (
        <Link
          key={link.title}
          href={link.path}
          onClick={closeHandler}
          className={styles.modal__link}
        >
          {link.title}
        </Link>
      ))}
    </motion.div>
  );
};

export default MenuMobileModal;
