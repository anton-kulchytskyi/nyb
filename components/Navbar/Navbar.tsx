'use client';
import Link from 'next/link';
import Image from 'next/image';

import LogoImg from '@/public/icons/logo.svg';
// import BurgerMenu from '@/public/icons/burger__menu.svg';

import useWindowDimensions from '@/hooks/useWindowDimensions';

import MenuIcon from '../MenuIcon/MenuIcon';

// import MenuMobileModal from '../MenuMobileModal/MenuMobileModal';

import styles from './navbar.module.scss';


const Navbar = () => {
  const { width } = useWindowDimensions();
  const tabletScreen = width as number <= 768;

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__side}>
          {tabletScreen ? (
            <MenuIcon />
            // <Link href="/menu">
            //   <Image
            //     src={BurgerMenu}
            //     alt="Burger Menu"
            //   />
            // </Link>
          ) : (
            <>
              <Link href="/catalog" className={styles.link}>Yachts</Link>
              <Link href="/" className={styles.link}>How it works?</Link>
            </>
          )}
        </div>
        {/* {showMobileMenu && <MenuMobileModal />} */}
        <Link 
          href="/"
          className={styles.logo}
        >
          <Image
            src={LogoImg}
            className={styles.logo__image}
            alt="Logo"
            priority
          />
        </Link>
        <div className={styles.navbar__side}>
          {!tabletScreen && <Link href="/" className={styles.link}>Change Units</Link>}
          {!tabletScreen && <Link href="/" className={styles.link}>Reviews</Link>}
          <Link href="/" className={styles.link}>Contact</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
