import { Metadata } from "next";
import { getAllVessels } from '@/utils/api/getAllVessels';
import {Vessel} from "@/interfaces/vessel.interface";
import typo from "@/styles/typography.module.scss";
import FYCard from "@/components/FYCard/FYCard";
import img_1 from '../../public/fyc_1.jpeg';
import img_2 from '../../public/fyc_2.jpeg';
import img_3 from '../../public/fyc_3.jpeg';
const imgs = [img_1, img_2, img_3];
import styles from './page.module.scss';
export const metadata: Metadata = {
  title: 'Catalog | Norse Yacht Co',
}

export default async function Catalog() {
  const vessels = await getAllVessels();

  return (
    <section>
      <h4 className={`cards_container ${styles.catalog_container} ${typo.typo_h4}`}>Catalogue</h4>
      <div className="cards_container">
        {vessels.map((yacht: Vessel, i: number) => (
          <FYCard 
            key={yacht.id} 
            yacht={yacht} 
            photo={imgs[i]} 
            linkTo={`/catalog/${yacht.id}`}/>
          // <Link
          //     href={`/catalog/${yacht.id}`}
          //     as="/catalog/106"
          //     key={yacht.id}>
          //   <div>{yacht.id}</div>
          // </Link>
        ))}

      </div>
    </section>
  )
}
