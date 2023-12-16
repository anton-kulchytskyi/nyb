import { Vessel } from "@/interfaces/vessel.interface";
import FYCard from "@/components/FYCard/FYCard";

// replace to origin path
import img_1 from '../../public/fyc_1.jpeg';
import img_2 from '../../public/fyc_2.jpeg';
import img_3 from '../../public/fyc_3.jpeg';
const imgs = [img_1, img_2, img_3];

type Props = {
  yachts: Vessel[];
}
const CatalogYacht = ({ yachts } : Props ) => {

  return (
    <div className="cards_container">
      {yachts && yachts.map((yacht: Vessel, i: number) => (
        <FYCard
          key={i}
          yacht={yacht}
          photo={imgs[i]}/>
      ))}
    </div>
  )
};

export default CatalogYacht;
