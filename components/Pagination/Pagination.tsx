import styles from './pagination.module.scss'

type Props = {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
const Pagination = ({items, pageSize, currentPage, onPageChange}: Props) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  
  return(
    <>
      <ul className={styles.pagination}>
        {pages.map((page) => {
          return <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
          >
            <button onClick={() => onPageChange(page)}>{page}</button>
          </li>
        })}
      </ul>
    </>

  )
};

export default Pagination;
