import { Metadata } from "next";
import { redirect } from 'next/navigation'
import { getAllVessels } from '@/utils/api/getAllVessels';
import typo from "@/styles/typography.module.scss";
import CatalogYacht from "@/components/CatalogYacht/catalogYacht";
import Pagination from "@/components/Pagination/Pagination";
import styles from './page.module.scss';


export const metadata: Metadata = {
  title: 'Catalog | Norse Yacht Co',
};

const CardNumber = 9;

const Catalog = async ({ searchParams }: {searchParams?: {page: string; size: string}} ) => {
  const allYachts = await getAllVessels();
  let page = Number(searchParams?.page) || 1;
  const size = Number(searchParams?.size) || CardNumber;

  if (Math.ceil(allYachts?.length / size) < page) {
    page = 1;
    redirect(`?page=${page}&size=${size}`)
  }

  const toVessel = page * size;
  const fromVessel = toVessel - size;
  const yachtsPage = allYachts?.length ? allYachts.slice(fromVessel, toVessel) : [];

  return (
    <section className={`${styles.catalog_container}`}>
      <h4 className={`${styles.catalog_title} ${typo.typo_h4}`}>Catalogue</h4>
      {yachtsPage.length ?
        (<CatalogYacht yachts={yachtsPage}></CatalogYacht>)
        :(<h4 className={`${styles.no_yachts}`}>No Yachts</h4>)
      }
      <Pagination 
        items={allYachts?.length} 
        pageSize={CardNumber}
        currentPage={page}
      />
    </section>
  )
}

export default Catalog;