import Link from "next/link";
import {Vessel} from "@/interfaces/vessel.interface";
import getAllVessels from '../../utils/api/getAllVessels';

export default async function Catalog() {
  const vessels = await getAllVessels();

  return (
    <>
      <h1>Catalogue</h1>
      <ul>
        {vessels.map((ves: Vessel) => (
          <li key={ ves.id }>
            <Link href={`/catalog/${ves.id}`}>{ves.vesselMake}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
