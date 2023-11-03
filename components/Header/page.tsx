'use client'
import Image from 'next/image'
import headerImg from '../../public/header_img.png'
import Navbar from "../Navbar/page"
import styles from './header.module.css'
import { Inter, Roboto, Bai_Jamjuree } from 'next/font/google'
import beautifulEs from 'next/font/local'
import Button from '../Button/page'

const baiJamjuree = Bai_Jamjuree({ weight: '700', subsets: ['latin'] })
const bEs = beautifulEs({
  src: '../../public/font/Beautiful_ES.ttf',
  variable: '--font-bEs',
})


const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.header__container}>
        <div className={styles.wrapper}>
          <Image alt="header_img" src={headerImg} fill={true} className={styles.image} />
          <h1 className={`${styles.title} ${baiJamjuree.className}`}>Good quality</h1>
          <p className={`${styles.desc} ${bEs.className}`}>Easy to buy!</p>
          <Button text="Follow your dream" onClick={() => {console.log('click')}} />
        </div>
      </div>
    </header>
  )
}

export default Header