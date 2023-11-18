'use client';
import Link from 'next/link'
import styles from './footer.module.scss'
import Image from 'next/image'
import FooterLogo from '@/public/icons/logo_footer.svg';
import Copyright from '../Copyright/Copyright';
import SocialMedia from '../SocialMedia/SocialMedia';
import useWindowDimensions from '@/hooks/useWindowDimensions';

const Footer = () => {
  const { width } = useWindowDimensions();
  const smallScreen = width as number <= 786;
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__logo} ${styles.footer__side}`}>
        <Link href="/">
          <Image
            src={FooterLogo}
            className={styles.logo__img}
            alt="Logo"
            priority
          />
        </Link>
        {!smallScreen && <Copyright />}
      </div>
      <div className={styles.footer__links_container}>
        <div className={styles.footer__links}>
          <Link
            href="/catalog"
            className={styles.link}
          >Yachts</Link>
          <Link
            href="/"
            className={styles.link}
          >How it works?</Link>
          <Link
            href="/"
            className={styles.link}
          >Reviews</Link>
        </div>
        <div className={styles.footer__links}>
          <Link
            href="/"
            className={styles.link}
          >Terms of use</Link>
          <Link
            href="/"
            className={styles.link}
          >Cookies policy</Link>
          <Link
            href="/"
            className={styles.link}
          >Privacy policy</Link>
        </div>
      </div>
      <div className={`${styles.footer__side} ${styles.footer__social}`}>
        <SocialMedia />
        {smallScreen && <Copyright />}
      </div>
    </footer>
  )
}

export default Footer
