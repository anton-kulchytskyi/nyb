import Link from 'next/link';
import { LinkProps } from '@/interfaces/clickable.interface';

const LinkComponent = ({ style, text, href }: LinkProps) => {
  // eslint-disable-next-line
  console.log(style);
  return (
    <Link
      href={href}
      className={style}
    >
      {text}
    </Link>
  );
};

export default LinkComponent;
