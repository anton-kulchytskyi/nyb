import Image from 'next/image'
import headerImg from '../../public/header_img.png'

import styles from './header.module.css'

import Navbar from '../Navbar/page'
import Button from '../Button/page'

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.header__container}>
        <div className={styles.wrapper}>
          <Image alt="header_img" src={headerImg} fill={true} className={styles.image} />
          <h1 className={styles.title}>Good quality</h1>
          <Button text="Follow your dream" linkTo="/catalog" />
        </div>
      </div>
    </header>
  )
}

export default Header