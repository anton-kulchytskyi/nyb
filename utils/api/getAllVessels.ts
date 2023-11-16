import {Vessel} from "@/interfaces/vessel.interface";

export default async function getData(): Promise<Vessel[]> {
  const response = await fetch('https://nyb-project-production.up.railway.app/vessels')

  return response.json();
}
