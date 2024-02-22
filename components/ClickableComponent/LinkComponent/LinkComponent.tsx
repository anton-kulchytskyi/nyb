import Link from 'next/link';
import { LinkProps } from '@/interfaces/clickable.interface';

const LinkComponent = ({ style, text, href, onClick }: LinkProps) => {
  // eslint-disable-next-line
  console.log(style);
  return (
    <Link
      href={href}
      className={style}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default LinkComponent;
