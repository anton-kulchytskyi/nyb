import classNames from 'classnames';
import styles from './loader.module.scss';

type Props = {
  biggest?: boolean;
  absoluteCenter?: boolean;
};

const Loader = ({ biggest, absoluteCenter }: Props) => (
  <div
    className={classNames(styles.loader, {
      [styles.biggest]: biggest,
      [styles.absoluteCenter]: absoluteCenter,
    })}
  >
    <div className={styles.loader__content} />
  </div>
);

export default Loader;
