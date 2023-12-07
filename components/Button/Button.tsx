import Link from 'next/link';
import { ButtonInterface } from '@/interfaces/button.interface';
import styles from './button.module.scss';

function Button({
  text,
  linkTo,
  primary,
  secondary,
  header,
  center,
  hover
} : ButtonInterface) {  
  return (
    <Link
      href={linkTo}
      className={`
      ${styles.button}
      ${primary ? styles.primary : ''}
      ${secondary ? styles.secondary : ''}
      ${header ? styles.header : ''}
      ${center ? styles.center : ''}
      ${hover ? styles.hover : ''}
    `}>
      {text}
    </Link>
  )
}

export default Button
