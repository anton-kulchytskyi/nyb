'use client'

import {useEffect, useState} from "react";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { getVesselBySearch} from '@/utils/api/getAllVessels';
import typo from "@/styles/typography.module.scss";
import CatalogYacht from "@/components/CatalogYacht/catalogYacht";
import {Vessel} from "@/interfaces/vessel.interface";
import styles from './page.module.scss';
// export const metadata: Metadata = {
//   title: 'Catalog | Norse Yacht Co',
// }

export default function Catalog( ) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchPar = useSearchParams();
  const params = new URLSearchParams(searchPar);
  const [yachts, setYachts] = useState<Vessel[]>()
  let x = params.toString();
  // console.log(x)

  if (!x) {
    x = 'page=0&size=6';
    replace(`${pathname}?${x.toString()}`);
  }

  useEffect(() => {
    getVesselBySearch(x).then((result) => {
      return setYachts(result);
    });
  }, [x]);

  return (
    <section>
      <h4 className={`cards_container ${styles.catalog_container} ${typo.typo_h4}`}>Catalogue</h4>
      <CatalogYacht par={yachts}></CatalogYacht>
      <Link href='/catalog?page=1&size=6'>Next</Link>
    </section>
  )
}
