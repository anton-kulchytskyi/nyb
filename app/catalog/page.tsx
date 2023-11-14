import Link from "next/link";

import getAllVessels from '../../utils/api/getAllVessels';

export default async function Catalog() {
  const vessels = await getAllVessels();
  console.log(vessels)
  return (
  <>
    <h1>Catalogue</h1>
    <ul>
      {vessels.map((ves: any) => (
        <li key={ves.id}>
          <Link href={`/catalog/${ves.id}`}>{ves.vesselMake}</Link>
        </li>
      ))}
    </ul>
  </>
  )
}
