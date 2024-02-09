'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import HomePageSvg from '../SvgIconsComponents/HomePageSvg';
import RightArrowSvg from '../SvgIconsComponents/RightArrowSvg';
import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = () => {
  const pathname = usePathname();
  const currentPage = pathname.slice(1, pathname.length).split('-').join(" ");

  return (
    <div className={styles.body}>
      <Link href="/">
        <HomePageSvg />
      </Link>
      <RightArrowSvg color={false} />
      <p className={styles.item}>{currentPage}</p>
    </div>
  );
};

export default BreadCrumbs;
