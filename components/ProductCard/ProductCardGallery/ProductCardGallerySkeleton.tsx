import styles from './ProductCardGallery.module.scss';

const ProductCardGallerySkeleton = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__container}>
        <div className={styles.row}>
          <div className={styles.triple_col}>
            <h2>Slider skeleton here</h2>
          </div>
          <div className={styles.col}>
            <div className={styles.gallery__side}>
              <h4 className={styles.gallery__side__title}>Bla</h4>
              <h4 className={styles.gallery__side__title}>Bla</h4>
              <span className={styles.gallery__side__place}>Bla</span>
              <div className={styles.gallery__side__info}>
                <p className={styles.line}>
                  <span className={styles.line__name}>Price:</span>
                  <span className={styles.line__price}>446646</span>
                </p>
                <p className={styles.line}>
                  <span className={styles.line__name}>Year:</span>
                  <span className={styles.line__value}>20606</span>
                </p>
                <p className={styles.line}>
                  <span className={styles.line__name}>Cabin:</span>
                  <span className={styles.line__value}>4</span>
                </p>
                <p className={styles.line}>
                  <span className={styles.line__name}>Berth:</span>
                  <span className={styles.line__value}>3</span>
                </p>
                <p className={styles.line}>
                  <span className={styles.line__name}>Toilets:</span>
                  <span className={styles.line__value}>2</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardGallerySkeleton;
