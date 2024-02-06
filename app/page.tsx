import Hero from '@/components/Hero/Hero';
import styles from './page.module.scss';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
};

export default HomePage;
