import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getAllVessels, getYachtMakes } from '@/utils/api/getAllVessels';

import typo from "@/styles/typography.module.scss";
import CatalogYacht from "@/components/Catalogue/CatalogYacht/catalogYacht";
import Pagination from "@/components/Pagination/Pagination";
import CatalogProps from '@/components/Catalogue/CatalogProps/CatalogProps';
import { getCountries, getModels, getTowns } from '@/utils/api/getFilterProps';
import { preparedYachtsList } from '@/utils/functions/preparedYachtsList';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Catalogue | Norse Yacht Co',
};

const CardNumber = 9;

type SearchParamsType = {
  page: string;
  size: string;
  sort: string;
};

const Catalog = async ({ searchParams }: {searchParams?: SearchParamsType}) => {
  const baseYachts = await getAllVessels();
  const allYachts = preparedYachtsList(baseYachts, searchParams);

  const yachtsParams = { 
    makes: await getYachtMakes(), 
    models: await getModels(),
    countries: await getCountries(), 
    towns: await getTowns(), 
  };

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
          <CatalogProps yachtsParams={yachtsParams} />
        </div>
      </div>

      {yachtsPage.length ?
        (<CatalogYacht yachts={yachtsPage}></CatalogYacht>)
        : (<h4 className={`${styles.no_yachts}`}>No Yachts</h4>)
      }

      <Pagination
        items={allYachts?.length}
        pageSize={CardNumber}
        currentPage={page}
      />
    </section>
  );
};

export default Catalog;
