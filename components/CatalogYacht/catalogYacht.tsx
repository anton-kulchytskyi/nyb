'use client';

import {Vessel} from "@/interfaces/vessel.interface";
import FYCard from "@/components/FYCard/FYCard";

import {Any} from "@/interfaces/any.type";
import img_1 from '../../public/fyc_1.jpeg';
import img_2 from '../../public/fyc_2.jpeg';
import img_3 from '../../public/fyc_3.jpeg';
const imgs = [img_1, img_2, img_3];

// type Props = {
//   ves: Vessel[];
// }
const CatalogYacht = ({par} : Any ) => {


  return (
    <>
      <div className="cards_container">
        {par?._embedded.vessels.map((yacht: Vessel, i: number) => (
          <FYCard
            key={yacht.id}
            yacht={yacht}
            photo={imgs[i]}
            linkTo={`/catalog/${yacht.id}`}/>
        ))}
      </div>
          
      {/*<Pagination*/}
      {/*  items={100}*/}
      {/*  pageSize={10}*/}
      {/*  currentPage={currentPage}*/}
      {/*  onPageChange={onPageChange}*/}
      {/*></Pagination>*/}
    </>
  )
};

export default CatalogYacht;
