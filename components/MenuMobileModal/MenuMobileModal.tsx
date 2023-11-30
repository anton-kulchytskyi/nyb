import Link from 'next/link';
import styles from './menuMobileModal.module.scss'


const MenuMobileModal = () => {
  return (
    <div className={styles.modal}>
      <Link href="/catalog" className={styles.modal__link}>Yachts</Link>
      <Link href="/" className={styles.modal__link}>How it works?</Link>
      <Link href="/" className={styles.modal__link}>Change Units</Link>
      <Link href="/" className={styles.modal__link}>Reviews</Link>
      <Link href="/" className={styles.modal__link}>Contact</Link>
    </div>
  )
}

export default MenuMobileModal
