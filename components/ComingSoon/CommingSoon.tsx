import Link from 'next/link';
import styles from '@/components/ComingSoon/commingSoon.module.scss';

const CommingSoon = () => {
  return (
    <div className={styles.wrapper}>
      <h1>This page comes ASAP</h1>
      <Link href="/">Return to main page</Link>
    </div>
  );
};

export default CommingSoon;
