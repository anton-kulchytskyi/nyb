import Link from 'next/link';
import styles from './button.module.css'

type Props = {
  text: string;
  linkTo: string;
}

function Button({ text, linkTo }: Props) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles.header}`}
    >
      <Link href={linkTo} className={styles.link}>{text}</Link>
    </button>
  )
}

export default Button
