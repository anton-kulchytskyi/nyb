import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import BurgerMenu from '@/public/icons/burger__menu.svg';
import Close from '@/public/icons/close.svg';

type Props = {
  isClose: boolean;
  closeHandler: () => void;
};

const MenuIcon = ({ isClose, closeHandler }: Props) => {
  const pathname = usePathname();
  // eslint-disable-next-line
  console.log(pathname);
  return (
    <Link
      href={pathname}
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
  );
};

export default MenuIcon;
