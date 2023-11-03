import Link from "next/link"
import Image from 'next/image'
import styles from './navbar.module.css'
import { Inter, Roboto, Bai_Jamjuree } from 'next/font/google'
const roboto = Roboto({ weight: '500', subsets: ['latin'] })

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} ${roboto.className}`}>
      <Link href="/catalog" className={styles.link}>Yachts</Link>
      <Link href="/" className={styles.link}>How it works?</Link>
      <Link href="/">
        <Image
            // className={styles.logo}
            src="/Logo.svg"
            alt="Next.js Logo"
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