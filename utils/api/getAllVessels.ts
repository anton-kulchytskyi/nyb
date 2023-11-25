import { DefaultError } from '@/utils/errors/defaultError';
import { Vessel } from '@/interfaces/vessel.interface';

const BASE_URL = 'https://nyb-project-production.up.railway.app/vessels';

async function getData(url: string = ''): Promise<Vessel[]> {
  const response = await fetch(`${BASE_URL}${url}`);

  if (!response.ok) {
    throw new DefaultError;
  }

  return response.json();
}

export const getAllVessels = async () => await getData();
export const getVesselById = async (id: string) => await getData(id);
export const getFeauteredYacht = async () => {
  const yachts = await getData();

  return yachts.filter((yacht: Vessel) => yacht.featuredVessel)
};
