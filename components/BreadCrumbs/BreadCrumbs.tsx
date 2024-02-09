'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import HomePageSvg from '../SvgIconsComponents/HomePageSvg';
import RightArrowSvg from '../SvgIconsComponents/RightArrowSvg';
import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = () => {
  const paths = usePathname();
  const pathsWithoutDashes = paths.split('/').slice(1).map(path => path.split('-').join(' '));

  return (
    pathsWithoutDashes[0] !== '' &&
      <div className={styles.body}>
        <Link href="/">
          <HomePageSvg />
        </Link>
        <RightArrowSvg color={false} />
        {pathsWithoutDashes.map((path, index) => {
          const link = `/${pathsWithoutDashes.map(p => p.split(' ').join('-')).slice(0, index + 1).join('/')}`
          return (
            <React.Fragment key={index}>
              <Link
                className={styles.item}
                href={link}
              >
                {path}
              </Link>
              {pathsWithoutDashes.length !== index + 1 && <RightArrowSvg color={false} />}
            </React.Fragment>
          )
        })}
      </div>
  );
};

export default BreadCrumbs;
