//import {Metadata} from "next"

// import { getOneVes } from '../../../utils/api/getAllVessels';
import { getVesselById } from '@/utils/api/getAllVessels';

type Props = {
  params: {
    id: string;

    // vesselMake: string;
    // vesselDescription: string;
    // vesselPrice: number;
  }
}


// export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
//   return {
//     title: `Yacht ${id} | Norse Yacht Co`,
//     // title: id,
//   };
// }

export default async function Vessel({ params: { id } }: Props) {
  // const ves = await getOneVes(`/${id}`);
  const ves = await getVesselById(`/${id}`);

  return (
    <>
      <h1>{ves.vessel_make}</h1>
      <p>{ves.vessel_description}</p>
      <p>{ves.vessel_price}</p>
    </>
  )
}
