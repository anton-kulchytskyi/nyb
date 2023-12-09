import Link from 'next/link';
import { ButtonInterface } from '@/interfaces/button.interface';
import styles from './textButton.module.scss';

function TextButton({
  text,
  linkTo,
  primary,
  secondary
} : ButtonInterface) {

  const textButtonStyle = [
    styles.button,
    primary ? styles.primary : '',
    secondary ? styles.secondary : ''
  ].join(' ');

  return (
    <Link
      href={linkTo}
      className={textButtonStyle}>
      {text}
    </Link>
  )
}

export default TextButton;
