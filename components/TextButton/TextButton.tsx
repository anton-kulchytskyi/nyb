import Link from 'next/link';
import { ButtonInterface } from '@/interfaces/button.interface';
import styles from './textButton.module.scss';

function TextButton({
  text,
  linkTo,
  primary,
  secondary
} : ButtonInterface) {  
  return (
    <Link
      href={linkTo}
      className={`
      ${styles.button}
      ${primary ? styles.primary : ''}
      ${secondary ? styles.secondary : ''}
    `}>
      {text}
    </Link>
  )
}

export default TextButton;
