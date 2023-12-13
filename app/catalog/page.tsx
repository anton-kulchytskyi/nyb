import { Metadata } from "next";
import { redirect } from 'next/navigation'
import { getAllVessels } from '@/utils/api/getAllVessels';
import typo from "@/styles/typography.module.scss";
import CatalogYacht from "@/components/CatalogYacht/catalogYacht";
import Pagination from "@/components/Pagination/Pagination";
// import { Vessel } from '@/interfaces/vessel.interface';
import styles from './page.module.scss';
// import { mockVesselsItems } from './mockData'

export const metadata: Metadata = {
  title: 'Catalog | Norse Yacht Co',
};

enum CardNumber {
  Three = 3,
  Six = 6,
}

// const mockVessels = ():Promise<Vessel[]>=> {
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       return resolve(mockVesselsItems)
//     })
//   })
// }

const Catalog = async ({ searchParams }: {searchParams?: {page: string; size: string}} ) => {
  const allYachts = await getAllVessels();
  // const allYachts = await mockVessels();
  let page = Number(searchParams?.page) || 1;
  const size = Number(searchParams?.size) || CardNumber.Six;

  if (Math.ceil(allYachts?.length / size) < page) {
    page = 1;
    redirect(`?page=${page}&size=${size}`)
  }

  const toVessel = page * size;
  const fromVessel = toVessel - size;
  const yachtsPage = allYachts?.length ? allYachts.slice(fromVessel, toVessel) : [];

  return (
    <section className={`${styles.catalog_container}`}>
      <h4 className={`cards_container ${styles.catalog_title} ${typo.typo_h4}`}>Catalogue</h4>
      {yachtsPage.length ?
        (<CatalogYacht yachts={yachtsPage}></CatalogYacht>)
        :(<h4 className={`${styles.no_yachts}`}>No Yachts</h4>)
      }
      <Pagination 
        items={allYachts?.length} 
        pageSize={CardNumber.Six} 
        currentPage={page}
      />
    </section>
  )
}

export default Catalog;
