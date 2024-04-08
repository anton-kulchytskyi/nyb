import styles from './ProductCardGallery.module.scss';

const ProductCardGallerySkeleton = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__container}>
        <div className={styles.gallery__slider}>
          <div className={styles.loadingSkeleton}>
            <div className={styles.loading_text}></div>
            <div className={styles.loading_image}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardGallerySkeleton;
