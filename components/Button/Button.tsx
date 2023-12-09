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

  const buttonStyle = [
    styles.button,
    primary ? styles.primary : '',
    secondary ? styles.secondary : '',
    header ? styles.header : '',
    center ? styles.center : '',
    hover ? styles.hover : ''
  ].join(' ');

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
