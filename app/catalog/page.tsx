import Link from "next/link";
import { Metadata } from "next";
// import { getAllVessels } from '@/utils/api/getAllVessels';
import typo from "@/styles/typography.module.scss";
import CatalogYacht from "@/components/CatalogYacht/catalogYacht";
import Pagination from "@/components/Pagination/Pagination";
import { Vessel } from '@/interfaces/vessel.interface';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Catalog | Norse Yacht Co',
};

enum CardNumber {
  Three = 3,
  Six = 6,
}
const mockVesselsItems: Vessel[] = [  
  {
    vessel_id: 1,
    featured: true,
    vessel_make: 'Hanse',
    vessel_model: '60',
    vessel_price: 120000,
    vessel_year: 2016,
    vessel_country: 'Norway',
    vessel_town: 'Oslo',
    vessel_loa: 15,
    vessel_beam: 3,
    vessel_draft: 3,
    vessel_cabin: 2,
    vessel_berth: 4,
    vessel_fuel_type: 'All fuel types',
    vessel_keel_type: 'All keel types',
    vessel_engine: 1,
    vessel_description: 'The best yacht ever. Create on webpage',
    vessel_created_at: '2023-12-07T12:01:32',
    vessel_image_key: '79ff64b7-2f19-4cc9-80a6-e6d91057d1d6'
  },
  {
    vessel_id: 2,
    featured: true,
    vessel_make: 'Hanse',
    vessel_model: '60',
    vessel_price: 120000,
    vessel_year: 2016,
    vessel_country: 'Norway',
    vessel_town: 'Oslo',
    vessel_loa: 15,
    vessel_beam: 3,
    vessel_draft: 3,
    vessel_cabin: 2,
    vessel_berth: 4,
    vessel_fuel_type: 'All fuel types',
    vessel_keel_type: 'All keel types',
    vessel_engine: 1,
    vessel_description: 'The best yacht ever. Create on webpage',
    vessel_created_at: '2023-12-07T12:11:02',
    vessel_image_key: 'e233b4f3-9ec2-480a-96eb-a35cbbf6efa3'
  },
  {
    vessel_id: 3,
    featured: true,
    vessel_make: 'Hanse',
    vessel_model: '60',
    vessel_price: 120000,
    vessel_year: 2016,
    vessel_country: 'Norway',
    vessel_town: 'Oslo',
    vessel_loa: 15,
    vessel_beam: 3,
    vessel_draft: 3,
    vessel_cabin: 2,
    vessel_berth: 4,
    vessel_fuel_type: 'All fuel types',
    vessel_keel_type: 'All keel types',
    vessel_engine: 1,
    vessel_description: 'The best yacht ever. Create on webpage',
    vessel_created_at: '2023-12-07T12:21:02',
    vessel_image_key: 'e1e5b041-088f-45d3-9e92-937843eea6e3'
  },
  {
    vessel_id: 4,
    featured: true,
    vessel_make: 'Hanse',
    vessel_model: '60',
    vessel_price: 120000,
    vessel_year: 2016,
    vessel_country: 'Norway',
    vessel_town: 'Oslo',
    vessel_loa: 15,
    vessel_beam: 3,
    vessel_draft: 3,
    vessel_cabin: 2,
    vessel_berth: 4,
    vessel_fuel_type: 'All fuel types',
    vessel_keel_type: 'All keel types',
    vessel_engine: 1,
    vessel_description: 'The best yacht ever. Create on webpage',
    vessel_created_at: '2023-12-07T16:47:42',
    vessel_image_key: '36748e9e-ffc0-49c9-b581-d3453923c58c'
  },
  {
    vessel_id: 5,
    featured: true,
    vessel_make: 'Hanse',
    vessel_model: '60',
    vessel_price: 120000,
    vessel_year: 2016,
    vessel_country: 'Norway',
    vessel_town: 'Oslo',
    vessel_loa: 15,
    vessel_beam: 3,
    vessel_draft: 3,
    vessel_cabin: 2,
    vessel_berth: 4,
    vessel_fuel_type: 'All fuel types',
    vessel_keel_type: 'All keel types',
    vessel_engine: 1,
    vessel_description: 'The best yacht ever. Create on webpage',
    vessel_created_at: '2023-12-07T12:01:32',
    vessel_image_key: '79ff64b7-2f19-4cc9-80a6-e6d91057d1d6'
  },
  {
    vessel_id: 6,
    featured: true,
    vessel_make: 'Hanse',
    vessel_model: '60',
    vessel_price: 120000,
    vessel_year: 2016,
    vessel_country: 'Norway',
    vessel_town: 'Oslo',
    vessel_loa: 15,
    vessel_beam: 3,
    vessel_draft: 3,
    vessel_cabin: 2,
    vessel_berth: 4,
    vessel_fuel_type: 'All fuel types',
    vessel_keel_type: 'All keel types',
    vessel_engine: 1,
    vessel_description: 'The best yacht ever. Create on webpage',
    vessel_created_at: '2023-12-07T12:11:02',
    vessel_image_key: 'e233b4f3-9ec2-480a-96eb-a35cbbf6efa3'
  },
  {
    vessel_id: 7,
    featured: true,
    vessel_make: 'Hanse',
    vessel_model: '60',
    vessel_price: 120000,
    vessel_year: 2016,
    vessel_country: 'Norway',
    vessel_town: 'Oslo',
    vessel_loa: 15,
    vessel_beam: 3,
    vessel_draft: 3,
    vessel_cabin: 2,
    vessel_berth: 4,
    vessel_fuel_type: 'All fuel types',
    vessel_keel_type: 'All keel types',
    vessel_engine: 1,
    vessel_description: 'The best yacht ever. Create on webpage',
    vessel_created_at: '2023-12-07T12:21:02',
    vessel_image_key: 'e1e5b041-088f-45d3-9e92-937843eea6e3'
  },
  {
    vessel_id: 8,
    featured: true,
    vessel_make: 'Hanse',
    vessel_model: '60',
    vessel_price: 120000,
    vessel_year: 2016,
    vessel_country: 'Norway',
    vessel_town: 'Oslo',
    vessel_loa: 15,
    vessel_beam: 3,
    vessel_draft: 3,
    vessel_cabin: 2,
    vessel_berth: 4,
    vessel_fuel_type: 'All fuel types',
    vessel_keel_type: 'All keel types',
    vessel_engine: 1,
    vessel_description: 'The best yacht ever. Create on webpage',
    vessel_created_at: '2023-12-07T16:47:42',
    vessel_image_key: '36748e9e-ffc0-49c9-b581-d3453923c58c'
  }];

const mockVessels = ():Promise<Vessel[]>=> {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      return resolve(mockVesselsItems)
    })
  })
}

const Catalog = async ({ searchParams }: {searchParams?: {page: string; size: string}} ) => {
  // const allYachts = await getAllVessels();
  const allYachts = await mockVessels();
  const page = Number(searchParams?.page) || 1;
  const size = Number(searchParams?.size) || CardNumber.Six;
  const toVessel = page * size;
  const fromVessel = toVessel - size;
  const yachtsPage = allYachts?.length ? allYachts.slice(fromVessel, toVessel) : [];
  // console.log(`--- fromVessel ----${fromVessel} +++++ toVessel--${toVessel} ----- all ${allYachts.length}`)
  // console.log(yachtsPage.length)
  return (
    <section>
      <h4 className={`cards_container ${styles.catalog_container} ${typo.typo_h4}`}>Catalogue</h4>
      {yachtsPage.length ?
        (<CatalogYacht yachts={yachtsPage}></CatalogYacht>)
        :(<h4 className={`${styles.no_yachts}`}>No Yachts</h4>)
      }
      <br />
      <Link href='?page=1&size=6'>Next1</Link>
      <Link href='?page=2&size=6'>Next2</Link>
      <br />
      <Pagination 
        items={allYachts?.length} 
        pageSize={CardNumber.Six} 
        currentPage={page}
      />
    </section>
  )
}

export default Catalog;
