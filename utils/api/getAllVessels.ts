import { DefaultError } from '@/utils/errors/defaultError';
import { Vessel, VesselWithImageUrl } from '@/interfaces/vessel.interface';
import { fetchImgUrl } from '@/utils/api/getImageFromAWS';

const BASE_URL = 'https://nyb-project-production.up.railway.app/vessels';
// const BASE_URL = 'https://nyb-project-production.up.railway.app/vessels/cards';

function getData(): Promise<Vessel[]>;
function getData(url: string): Promise<Vessel>;
function getData(url: string): Promise<Vessel[]>;

async function getData(
  url: string = '',
  search: string = ''
): Promise<Vessel[] | Vessel> {
  const response = await fetch(`${BASE_URL}${url}?${search}`, {
    next: { revalidate: 10800 },
  });

  if (!response.ok) {
    throw new DefaultError();
  }

  return response.json();
}

async function addImgUrlToVessel(): Promise<VesselWithImageUrl[]> {
  const yachts = await getData();

  return await Promise.all(
    yachts.map(async (yacht) => {
      const url = await fetchImgUrl(yacht.vessel_image_key);
      return {
        ...yacht,
        vessel_image_url: url,
      };
    })
  );
}

export const getAllVessels = async (): Promise<VesselWithImageUrl[]> =>
  await addImgUrlToVessel(); //  Promise<VesselWithImageUrl[]>

export const getVesselById = async (id: string): Promise<Vessel> =>
  await getData(id); // Promise<Vessel>

export const getFeaturedYacht = async (): Promise<VesselWithImageUrl[]> => {
  const yachts = await addImgUrlToVessel();

  return yachts.filter((yacht: VesselWithImageUrl) => yacht.featured);
};
