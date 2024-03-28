import styles from './ProductCardGallery.module.scss';

const ProductCardGallerySkeleton = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__container}>
        <div className={styles.row}>
          <div className={styles.triple_col}>
            <div className={styles.gallery__slider}>
              <div className={styles.loadingSkeleton}>
                <div className={styles.loading_image}></div>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.gallery__side}>
              <div className={styles.loadingSkeleton}>
                <div className={styles.loading_text}></div>
                <div className={styles.loading_text}></div>
                <div className={styles.loading_text}></div>
                <div className={styles.loading_text}></div>
                <div className={styles.loading_text}></div>
                <div className={styles.loading_text}></div>
                <div className={styles.loading_text}></div>
                <div className={styles.loading_text}></div>
                <div className={styles.loading_text}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardGallerySkeleton;
