import Image from 'next/image'
import styles from './copyright.module.scss'
import CopyrightIcon from '../../public/copy.svg';

const Copyright = () => {
  return (
    <span className={styles.copyright}>
      <Image
        src={CopyrightIcon}
        alt="Copyright"
        priority
      />
        Name Всі права захищені.
    </span>
  )
}

export default Copyright