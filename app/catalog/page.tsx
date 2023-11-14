import { Metadata } from "next";
import page from './page.module.css'
import styles from './page.module.css'
import { getData } from '../../utils/api/getAllVessels';
import FYCard from "@/components/FYCard/page";
import img_1 from "@/public/fyc_1.jpeg";
import img_2 from "@/public/fyc_2.jpeg";
import img_3 from "@/public/fyc_3.jpeg";

const imgs = [img_1, img_2, img_3];
export const metadata: Metadata = {
  title: 'Catalog | Norse Yacht Co',
}

export default async function Catalog() {
  // const vessels = await getData();

  return (
<>
    <h1 className={page.header}>Catalogue</h1>
  <div className={`common-container ${styles.catalogContainer}`}>
    {imgs.map((img, i) => (
        <FYCard
            key={i}
            photo={img}
        />
    ))}
  </div>
  </>
  )
}
