import Link from 'next/link';
import { ButtonInterface } from '@/interfaces/button.interface';
import styles from './button.module.scss';

function Button({ text, linkTo, primary, secondary, center, header, hover }: ButtonInterface) {
  
  return (
    <Link href={linkTo} className={styles.link}>
      <span
        className={`
         ${styles.button}
         ${primary && styles.primary}
         ${secondary && styles.secondary}
         ${center && styles.center}
         ${header && styles.header}
         ${hover && styles.hover}
       `}
      >{text}</span>
    </Link>
  )
}

export default Button
