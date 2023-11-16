import Link from "next/link"
import Image from 'next/image'
import styles from './navbar.module.scss'
import headerImg from '../../public/header_img.png'

const Navbar = () => {
  return (
    <>
      {/* <Image alt="header_img" src={headerImg} fill={true} className={styles.image} /> */}
      <nav className={styles.navbar}>
        <Link href="/catalog" className={styles.link}>Yachts</Link>
        <Link href="/" className={styles.link}>How it works?</Link>
        <Link href="/">
          <Image
              src="/Logo.svg"
              alt="Logo"
              width={180}
              height={37}
              priority
            />
        </Link>
        <Link href="/" className={styles.link}>Change Preferences</Link>
        <Link href="/" className={styles.link}>Reviews</Link>
        <Link href="/" className={styles.link}>Contact</Link>
      </nav>
      {/* <Image alt="header_img" src={headerImg} fill={true} className={styles.image} /> */}
    </>
  )
}

export default Navbar
