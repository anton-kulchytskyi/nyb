'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import BurgerMenu from '@/public/icons/burger__menu.svg';
import Close from '@/public/icons/close.svg';

const MenuIcon = () => {
  const [isClose, setIsClose] = useState(false);

  return (
    <span
      onClick={() => setIsClose(!isClose)}
    >
      {isClose ? (
        <Link href="/">
          <Image
            // src={BurgerMenu}
            // alt="Burger Menu"
            src={Close}
            alt="Close"
          />
        </Link>
      ) : (
        <Link href="/menu">
          <Image
            src={BurgerMenu}
            alt="Burger Menu"
            // src={Close}
            // alt="Close"
          />
        </Link>
      )}
    </span>
  )
}

export default MenuIcon
