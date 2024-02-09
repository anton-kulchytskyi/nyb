'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import HomePageSvg from '../SvgIconsComponents/HomePageSvg';
import RightArrowSvg from '../SvgIconsComponents/RightArrowSvg';
import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = () => {
  const pathname = usePathname();
  const a = pathname.slice(1, pathname.length).split('-').join(" ");

  return (
    <div className={styles.body}>
      <Link href="/">
        <HomePageSvg />
      </Link>
      <RightArrowSvg color={false} />
      {/* {a.map(b => ( */}
        <p className={styles.item}>{a}</p>
      {/* ))} */}
    </div>
  );
};

export default BreadCrumbs;
