import { Metadata } from "next";
// import img_1 from "@/public/fyc_1.jpeg";
// import img_2 from "@/public/fyc_2.jpeg";
// import img_3 from "@/public/fyc_3.jpeg";
// import FYCard from "@/components/FYCard/FYCard";
// import {getAllVessels} from "@/utils/api/getAllVessels";
import page from './page.module.css'
import styles from './page.module.css'

// const imgs = [img_1, img_2, img_3];
export const metadata: Metadata = {
  title: 'Catalog | Norse Yacht Co',
}

export default async function Catalog() {
  // const vessels = await getAllVessels();
  // console.log(vessels)

  return (
    <>
      <h1 className={page.header}>Catalogue</h1>
      <div className={`common-container ${styles.catalogContainer}`}>
        {/*{imgs.map((img, i) => (*/}
        {/*  <FYCard*/}
        {/*    key={i}*/}
        {/*    photo={img}*/}
        {/*  />*/}
        {/*))}*/}
      </div>
    </>
  )
}
