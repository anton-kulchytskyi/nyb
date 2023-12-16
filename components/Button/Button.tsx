import Link from 'next/link';
import { ButtonInterface } from '@/interfaces/button.interface';
import styles from './button.module.scss';

function Button({
  text,
  linkTo,
  primary
} : ButtonInterface) {

  const buttonStyle = `${styles.button} ${primary ? styles.primary : styles.secondary}`;

  return (
    <Link
      href={linkTo}
      className={buttonStyle}
    >
      {text}
    </Link>
  )
}

export default Button
