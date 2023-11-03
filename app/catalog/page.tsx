import Link from "next/link";

async function getData() {
  const response = await fetch('https://nyb-project-production.up.railway.app/api/vessels')

  return response.json();
}

export default async function Catalog() {
  const vessels = await getData();

  // console.log(vessels._embedded.vessels)

  return (
  <>
    <h1>Catalogue</h1>
    <ul>
      {vessels._embedded.vessels.map((ves: any) => (
        <li key={ves.id}>
          <Link href={`/catalog/${ves.id}`}>{ves.vesselMake}</Link>
        </li>
      ))}
    </ul>
  </>
  )
}