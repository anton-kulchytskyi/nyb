import Link from 'next/link';
import styles from './button.module.scss'
import { ButtonInterface } from '@/interfaces/button.interface';
// import { forwardRef } from 'react';

// type Props = {
//   text: string;
//   linkTo: string;
//   primary?: boolean;
//   secondary?: boolean;
//   absolute?: boolean;
//   hover?: boolean;
// }

function Button({ text, linkTo, primary, secondary, center, header, hover }: ButtonInterface) {
  // console.log(hover)
  
  return (
    <Link href={linkTo} className={styles.link}>
      <span
        // type="button"
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
    // <button
    //   type="button"
    //   className={`
    //     ${styles.button}
    //     ${primary && styles.primary}
    //     ${secondary && styles.secondary}
    //     ${absolute && styles.absolute}
    //     ${hover && styles.hover}
    //   `}
    // >
    //   <Link href={linkTo} className={styles.link}>{text}</Link>
    // </button>
  )
}

export default Button
