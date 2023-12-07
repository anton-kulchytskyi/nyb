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
    <span>
      {isClose ? (
        <Link
          href="/"
          onClick={closeHandler}
        >
          <Image
            src={Close}
            alt="Close"
          />
        </Link>
      ) : (
        <Link
          href="/"
          onClick={closeHandler}
        >
          <Image
            src={BurgerMenu}
            alt="Burger Menu"
          />
        </Link>
      )}
    </span>
  )
}

export default MenuIcon
