import Image from 'next/image';
import headerImg from '@/public/header_img.png';

import typo from '@/styles/typography.module.scss'

import Button from '../Button/Button';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Image
          alt='header_img'
          src={headerImg}
          fill={true}
          // style={{
          //   objectFit: 'cover',
          // }}
          className={styles.image}
        />
        <div className={styles.wrapper}>
          {/* <Image
            alt='header_img'
            src={headerImg}
            fill={true}
            className={styles.image}
          /> */}
          <h2 className={typo.typo_h2}>Good quality</h2>
          <h1 className={`${typo.typo_h1} ${styles.title}`}>Easy to buy!</h1>
          <Button text='Follow your dream' linkTo='/catalog' primary header />
        </div>
      </div>
    </header>
  );
};

export default Header;
