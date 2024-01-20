import styles from './cardSkeleton.module.scss';

const CardSkeleton = () => {
  // eslint-disable-next-line
  console.log('fromCardSkeleton');
  return (
    // Loading skeleton while waiting for the component to be ready
    <div className={styles.loadingSkeleton}>
      <div className={styles.loading_image}></div>
      {/* Placeholder for loading text */}
      <div className={styles.loading_text}></div>
      <div className={styles.loading_text}></div>
      <div className={styles.loading_text}></div>

      {/* Placeholder for loading image */}

      {/* Placeholder for loading button */}
      {/* <div className={styles.loading_button}></div> */}
    </div>
  );
};

export default CardSkeleton;
