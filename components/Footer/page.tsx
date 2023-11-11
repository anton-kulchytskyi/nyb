import Link from 'next/link'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
          <Image
            // className={styles.logo}
            src="/Logo_footer.svg"
            alt="Logo"
            width={180}
            height={37}
            priority
          />
        </Link>
    </footer>
  )
}

export default Footer
