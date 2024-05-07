import { Metadata } from 'next';
import { redirect } from 'next/navigation';
// import { getAllVessels } from '@/utils/api/getAllVessels';
import { getAllYachts } from '@/utils/api/getAllYachts';
import { getAllCountries, getAllTowns } from '@/utils/api/getFilterData';

import typo from '@/styles/typography.module.scss';
import CatalogYacht from '@/components/Catalogue/CatalogYacht/catalogYacht';
import Pagination from '@/components/Pagination/Pagination';
import Sorting from '@/components/Catalogue/Sorting/Sorting';
import Filter from '@/components/Catalogue/Filter/Filter';

import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Catalogue | Norse Yacht Co',
};

const CardNumber = 9;

const Catalog = async ({
  searchParams,
}: {
  searchParams?: { page: string; size: string; country: string; town: string };
}) => {
  const countriesFromServer = await getAllCountries();
  const allCountries = countriesFromServer.map((el) => el.country_name);
  const townsFromServer = await getAllTowns();

  // let search = '';

  // for (const key in searchParams) {
  //   search += `${key}${searchParams[key as string]}`;
  // }

  // const filteredYachts = await getAllFilteredYachts(search);
  // eslint-disable-next-line
  // console.log(filteredYachts);
  // const allYachts = await getAllVessels();
  const allYachts = await getAllYachts();
  let page = Number(searchParams?.page) || 1;
  const size = Number(searchParams?.size) || CardNumber;

  if (Math.ceil(allYachts?.length / size) < page) {
    page = 1;
    redirect(`?page=${page}&size=${size}`);
  }

  const toVessel = page * size;
  const fromVessel = toVessel - size;
  const yachtsPage = allYachts?.length
    ? allYachts.slice(fromVessel, toVessel)
    : [];

  return (
    <section className={styles.catalog_container}>
      <div className={styles.catalog__top}>
        <h4 className={`${styles.catalog_title} ${typo.typo_h4}`}>Catalogue</h4>
        <div className="d-flex">
          <Filter
            allCountries={allCountries}
            townsFromServer={townsFromServer}
          />{' '}
          <Sorting />
        </div>
      </div>
      {yachtsPage.length ? (
        <CatalogYacht yachts={yachtsPage}></CatalogYacht>
      ) : (
        <h4 className={`${styles.no_yachts}`}>No Yachts</h4>
      )}

      <Pagination
        items={allYachts?.length}
        pageSize={CardNumber}
        currentPage={page}
      />
    </section>
  );
};

export default Catalog;
