import Image from 'next/image'
import headerImg from '../../public/header_img.png'

import styles from './header.module.scss'

// import Navbar from '../Navbar/page'
import Button from '../Button/page'
import Link from 'next/link'
// import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <Navbar /> */}
      <div className={styles.header__container}>
        <div className={styles.wrapper}>
          <Image alt="header_img" src={headerImg} fill={true} className={styles.image} />
          <h1 className={styles.title}>Good quality</h1>
          {/* <Link href="/catalog" passHref legacyBehavior>
            <Button text="Follow your dream" primary/>
          </Link> */}
          {/* <Link href="/catalog"> */}
          <Button text="Follow your dream" linkTo="/catalog" primary/>
            {/* </Link> */}
        </div>
        {/* <Button text="Follow your dream" linkTo="/catalog" primary/> */}
      </div>
      {/* <Button text="Follow your dream" linkTo="/catalog" primary/> */}
    </header>
  )
}

export default Header
