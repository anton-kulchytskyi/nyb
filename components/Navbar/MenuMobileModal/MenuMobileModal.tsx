import { motion } from 'framer-motion';
import Link from 'next/link';

import { useCurrency } from '@/context/CurrencyContext';

import { pageLinksArray } from '@/utils/links/pageLinks';

import styles from './menuMobileModal.module.scss';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

type Props = {
  isMobileMenuClose: boolean;
  mobileMenuHandler: () => void;
  currencyModalHandler: () => void;
};

const MenuMobileModal = ({
  isMobileMenuClose,
  mobileMenuHandler,
  currencyModalHandler,
}: Props) => {
  const { selectedCurrency } = useCurrency();
  return (
    <motion.div
      className={styles.modal}
      animate={isMobileMenuClose ? 'open' : 'closed'}
      variants={variants}
    >
      {pageLinksArray.slice(0, 2).map((link, i) => (
        <Link
          key={i}
          href={link.path}
          className={styles.modal__link}
          onClick={mobileMenuHandler}
        >
          {link.title}
        </Link>
      ))}
      <button
        type="button"
        onClick={currencyModalHandler}
        className={styles.modal__link}
      >
        {`Split currency / ${selectedCurrency}`}
      </button>
    </motion.div>
  );
};

export default MenuMobileModal;
