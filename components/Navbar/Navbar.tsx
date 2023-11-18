'use client';
import Link from "next/link"
import Image from 'next/image'
import styles from './navbar.module.scss'
import LogoImg from '@/public/icons/logo.svg'
import LogoImgSmall from '@/public/icons/logo_small_screen.svg'
import BurgerMenu from '@/public/icons/burger__menu.svg'

import useWindowDimensions from '@/hooks/useWindowDimensions';

const Navbar = () => {
  const { width } = useWindowDimensions();
  const logoSize = width as number <= 1200 && width as number > 360;
  const tabletScreen = width as number <= 768;
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__side}>
          {tabletScreen ? (
            <Image
              src={BurgerMenu}
              alt="Burger Menu"
            />
          ) : (
            <>
            <Link href="/catalog" className={styles.link}>Yachts</Link>
            <Link href="/" className={styles.link}>How it works?</Link>
            </>
          )}
        </div>
        <Link 
          href="/"
          className={styles.logo}
        >
          {logoSize ? (
            <Image
              src={LogoImgSmall}
              alt="Logo"
              priority
            />
            ) : (
            <Image
              src={LogoImg}
              alt="Logo"
              // className={styles.logo}
              priority
            />
            )}
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