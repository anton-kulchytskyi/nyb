'use client';

import useWindowDimensions from '@/hooks/useWindowDimensions';
import typo from '@/styles/typography.module.scss';

import TitlePlace from '../TitlePlace/TitlePlace';
import TextButton from '../TextButton/TextButton';
import ComponentLogo from '../ComponentLogo/ComponentLogo';

import styles from './sectionComponentText.module.scss';

type Props = {
  title: string;
  subtitle: string;
  desc: string;
  logoTxt: string;
  logoSubTxt: string;
  order: boolean;
};

const SectionComponentText = ({
  title,
  subtitle,
  desc,
  logoTxt,
  logoSubTxt,
  order,
}: Props) => {
  const { width } = useWindowDimensions();
  const desktopScreen = (width as number) > 1199;
  // const color = order ? '#E7801A' : '#31455B';

  return (
    <div className={styles.text_container}>
      <TitlePlace title={title} subtitle={subtitle} order={order} />
      <p
        className={`${typo.typo_description} ${
          order ? '' : typo.typo_description_white
        }`}
      >
        {desc}
      </p>
      <TextButton text="Read more" linkTo="/catalog" primary={true} />
      <span className={styles.logo}>
        {desktopScreen ? (
          <ComponentLogo
            number={logoTxt}
            text={logoSubTxt}
            order={order}
            // color={color}
          />
        ) : null}
      </span>
    </div>
  );
};

export default SectionComponentText;
