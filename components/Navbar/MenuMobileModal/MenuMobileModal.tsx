import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useCurrency } from '@/context/CurrencyContext';

import { navbarLinksArray } from '@/utils/links/navbarLinksArray';

import styles from './menuMobileModal.module.scss';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

type Props = {
  isMobileMenuClose: boolean;
  mobileMenuHandler: () => void;
  currencyModalHandler: () => void;
  // selectedCurrency: string;
};

const MenuMobileModal = ({
  isMobileMenuClose,
  mobileMenuHandler,
  currencyModalHandler, // selectedCurrency,
}: Props) => {
  const { selectedCurrency } = useCurrency();
  const pathname = usePathname();
  return (
    <motion.div
      className={styles.modal}
      animate={isMobileMenuClose ? 'open' : 'closed'}
      variants={variants}
    >
      {navbarLinksArray.map((link) =>
        link.title === 'Split currency' ? (
          <Link
            key={link.title}
            href={pathname}
            className={styles.modal__link}
            onClick={currencyModalHandler}
          >
            {`${link.title} / ${selectedCurrency}`}
          </Link>
        ) : (
          <Link
            key={link.title}
            href={link.path}
            onClick={mobileMenuHandler}
            className={styles.modal__link}
          >
            {link.title}
          </Link>
        )
      )}
    </motion.div>
  );
};

export default MenuMobileModal;
