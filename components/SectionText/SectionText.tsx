import typo from '@/styles/typography.module.scss';
import styles from './sectionText.module.scss';

type Props = {
  title: string;
  title_2: string;
  desc: string;
  button: string;
  white?: boolean;
  gray?: boolean;
  reverse?: boolean;
  left?: boolean;
  width?: boolean;
  descWidth?: boolean;
}

const SectionText = ({ title, title_2, desc, button, white, gray, reverse, left, width, descWidth }: Props) => {
  return (
    <div className={`
      ${styles.container}
      ${reverse ? styles.container__reverse : ''}
      ${left ? styles.container__left : ''}
      ${width ? styles.container__width : ''}
    `}>
      <div className={styles.container__title}>
        <h3 className={`
          ${typo.typo_h3}
          ${gray ? typo.typo_h3__gray : ''}
        `}>
          {title}
        </h3>
        <p className={`
          ${typo.typo_description}
          ${white ? typo.typo_description_white : ''}
          ${descWidth ? styles.desc__width : ''}
        `}>
          {desc}
        </p>
        <p>
          {button}
        </p>
      </div>
      {/* <div className={styles.container__title_2}> */}
      <div className={`${typo.typo_uitxt} ${styles.container__title_2}`}>{title_2}</div>
      {/* </div> */}
    </div>
  )
}

export default SectionText;
