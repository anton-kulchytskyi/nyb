import Link from 'next/link';

import ClickableComponent from '@/components/ClickableComponent/ClickableComponent';
import Logo from '@/components/SvgIconComponents/Logo';

import styles from '@/components/Footer/footer.module.scss';
import variables from '@/styles/variables.module.scss';
// import sec_color from '@/styles/variables.module.scss';

const Footer = () => {
  // eslint-disable-next-line
  // console.log(variables);
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <Logo
          logoColor={variables.secondary_color}
          textColor={variables.white_color}
        />
      </Link>
      <ClickableComponent
        style={styles.link}
        text="/catalog"
        href="/"
      />
      <ClickableComponent
        style={styles.link}
        text="/how-it-works"
        href="/"
      />
      {/* <ClickableComponent
        text="/blog"
        href="/"
      />
      <ClickableComponent
        text="/terms"
        href="/"
      />
      <ClickableComponent
        text="/polic"
        href="/"
      />
      <ClickableComponent
        text="/cookies"
        href="/"
      /> */}
    </footer>
  );
};

export default Footer;
