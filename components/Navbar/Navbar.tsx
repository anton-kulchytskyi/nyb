'use client';
import Link from 'next/link';
import { useState } from 'react';

import MobileMenuIcon from '@/components/Navbar/MobileMenuIcon';
import Logo from '@/components/SvgIconComponents/Logo';
import ClickableComponent from '@/components/ClickableComponent/ClickableComponent';

import styles from '@/components/Navbar/navbar.module.scss';
import variables from '@/styles/variables.module.scss';

const Navbar = () => {
  const Console = () => {
    // eslint-disable-next-line
    console.log('button');
  };
  const [isMobileMenuClose, setIsMobileMenuClose] = useState(false);
  return (
    <nav>
      <span className={styles.small}>
        <MobileMenuIcon
          isMobileMenuClose={isMobileMenuClose}
          setIsMobileMenuClose={setIsMobileMenuClose}
        />
      </span>
      <span className={styles.large}>
        <ClickableComponent
          style={styles.link}
          text="Yachts"
          href="/catalog"
        />
        <ClickableComponent
          style={styles.link}
          text="How It Works?"
          href="/catalog"
        />
      </span>
      <Link href="/">
        <Logo
          logoColor={variables.primary_color}
          textColor={variables.primary_color}
        />
      </Link>
      {/* <span className={styles.link}> */}
      <span className={styles.large}>
        <ClickableComponent
          style={styles.link}
          text="Currency"
          onClick={Console}
        />
      </span>
      <ClickableComponent
        style={styles.link}
        text="Contacts"
        onClick={Console}
      />
      {/* </span> */}
    </nav>
  );
};

export default Navbar;
