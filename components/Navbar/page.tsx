import Link from "next/link"
import Image from 'next/image'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
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
  )
}

export default Navbar
