import { Metadata } from "next";
import Link from "next/link";
import { getAllVessels } from '@/utils/api/getAllVessels';
import {Any} from "@/interfaces/any.type";

export const metadata: Metadata = {
  title: 'Catalog | Norse Yacht Co',
}

export default async function Catalog() {
  const vessels = await getAllVessels();

  return (
    <>
      <h1>Catalogue</h1>
      <ul>
        {vessels.map((ves: Any ) => (
          <li key={ves.id}>
            <Link href={ `/catalog/${ves.id}`}>{ves.vesselMake}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
