import Image from 'next/image';
import Link from 'next/link';

import BurgerMenu from '@/public/icons/burger__menu.svg';
import Close from '@/public/icons/close.svg';

type Props = {
  isClose: boolean;
  closeHandler: () => void;
}

const MenuIcon = ({ isClose, closeHandler }: Props) => {
  return (
    <Link
      href='/'
      onClick={closeHandler}
    >
      {isClose ? (
        <Image
          src={Close}
          alt="Close"
        />
      ) : (
        <Image
          src={BurgerMenu}
          alt="Burger Menu"
        />
      )}
    </Link>
  )
}

export default MenuIcon
