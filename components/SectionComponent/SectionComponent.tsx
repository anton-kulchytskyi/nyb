import Image, { StaticImageData } from 'next/image';
import typo from '@/styles/typography.module.scss';

import { componentsDataArray } from '@/utils/componentsData/componentsDataArray';
import { Any } from '@/interfaces/any.type';

import ComponentLogo from '../ComponentLogo/ComponentLogo';
import TextButton from '../TextButton/TextButton';

import styles from './sectionComponent.module.scss';

type Props = {
  title: string;
  subtitle: string;
  desc: string;
  img: StaticImageData;
  logoTxt: string;
  logoSubTxt: string;
  color: string;
  sub: boolean;
}

const TitlePlace = ({t, s, c}: Any) => {
  return (
    c ? (
      <>
        <span className={typo.typo_uitxt}>{s}{' '}</span>
        {t}
      </>
    ) : (
      <>
        {t}
        <span className={typo.typo_uitxt}>{' '}{s}</span>
      </>
    )
  )
}

const SectionComponent = ({
  title,
  subtitle,
  desc,
  img,
  logoTxt,
  logoSubTxt,
  color,
  sub
}: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.section__text}>
        <div className={styles.section__text_container}>
          <h3 style={{ position: 'relative', zIndex: '1'}} className={`${typo.typo_h3} ${sub ? typo.typo_h3_gray : ''}`}>
            <TitlePlace t={title} s={subtitle} c={sub} />
          </h3>
        </div>
        <p className={typo.typo_description}>{desc}</p>
        <TextButton text='Read more' linkTo='/catalog' primary={sub} />
        <span className={styles.logo}>
          <ComponentLogo
            number={logoTxt}
            text={logoSubTxt}
            color={color}
          />
        </span>
      </div>
      <div className={styles.section__image}>
        <Image
          src={img}
          fill
          sizes="100vw"
          className={styles.image}
          alt={title}
        />
      </div>
    </section>
  )
}

const AllSectionComponents = () => {
  return (
    <>
      {componentsDataArray.map(({
        title,
        subtitle,
        desc,
        img,
        logoTxt,
        logoSubTxt,
      }, i) => (
        <SectionComponent
          key={title}
          title={title}
          subtitle={subtitle}
          desc={desc}
          img={img}
          logoTxt={logoTxt}
          logoSubTxt={logoSubTxt}
          color={i % 2 ? '#E7801A' : '#31455B'}
          sub={!!(i % 2)}
        />
      ))}
    </>
  )
}

export default AllSectionComponents;
