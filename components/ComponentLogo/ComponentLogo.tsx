import typo from '@/styles/typography.module.scss';
import LogoSvg from "../LogoSvg/LogoSvg";

import styles from './componentLogo.module.scss';


type Props = {
  number: string;
  text: string;
  color: string;
}

const ComponentLogo = ({ number, text, color }: Props) => {
  return (
    <div className={styles.logo_container}>
      <div className={styles.logo_text}>
        <p className={typo.typo_uitxt_secondary}>{number}</p>
        <p className={`${typo.typo_description} ${typo.typo_description_white}`}>{text}</p>
      </div>
      <LogoSvg color={color} />
    </div>
  )
};

export default ComponentLogo;
