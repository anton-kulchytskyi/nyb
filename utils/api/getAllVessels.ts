import { DefaultError } from '@/utils/errors/defaultError';
import { Vessel } from '@/interfaces/vessel.interface';

const BASE_URL = 'https://nyb-project-production.up.railway.app/vessels';
// const API_URL = 'https://nyb-project-production.up.railway.app/api/vessels';

function getData(): Promise<Vessel[]>;
function getData(url: string): Promise<Vessel>
function getData(url: string): Promise<Vessel[]>
function getData(url: string, params: string): Promise<Vessel[]>
async function getData(url: string = '', search: string = ''): Promise<Vessel[] | Vessel> {
  const response = await fetch(`${BASE_URL}${url}?${search}`);

  if (!response.ok) {
    throw new DefaultError;
  }

  return response.json();
}

export const getAllVessels = async (): Promise<Vessel[]> => await getData();
export const getVesselById = async (id: string): Promise<Vessel> => await getData(id);
export const getFeauteredYacht = async (): Promise<Vessel[]> => {
  const yachts = await getData();

  return yachts.filter((yacht: Vessel) => yacht.featured)
};

