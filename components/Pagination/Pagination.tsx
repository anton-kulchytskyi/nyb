import Link from "next/link";
import styles from './pagination.module.scss'

type Props = {
  items: number;
  pageSize: number;
  currentPage: number;
}
const Pagination = ({ items, pageSize, currentPage }: Props) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  
  return(
    <>
      <ul className={styles.pagination}>
        {pages.map((page) => {
          // if (page > 10) {
          //   return
          // }
          // if(page === 11) {
          //   return <li key={page}>...</li>
          // }

          return <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
            
          >
            <Link href={`?page=${page}&size=${pageSize}`}>{page}</Link>
          </li>
        })}
      </ul>
    </>

  )
};

export default Pagination;
