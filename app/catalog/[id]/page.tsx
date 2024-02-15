import dynamic from 'next/dynamic';

import { Metadata } from "next";
import { getVesselById } from '@/utils/api/getAllVessels';
import { fetchImgUrl } from '@/utils/api/getImageFromAWS';

type Props = {
  params: {
    id: string;
  }
}

interface Images {
  yacht_image_id: number,
  yacht_image_key: string,
}

export async function generateMetadata({ params: { id }}: Props): Promise<Metadata> {
  return {
    title: `Yacht ${id} | Norse Yacht Co`,
  };
}

const VesselViewNoSSR = dynamic(
  () => import('./VesselView'),
  { ssr: false }
);


export default async function Vessel({ params: { id }}: Props) {
  const ves = await getVesselById(`/${id}`);
  const images = await loadAllPhotosFromAWS(ves.vessel_images);

  async function loadAllPhotosFromAWS(images: Images[]) {
    const arrayOfFetchImages = [];

    for (let i = 0; i < images.length; i++) {
      const img = await fetchImgUrl(images[i].yacht_image_key);
      arrayOfFetchImages.push(img);
    }

    return arrayOfFetchImages;
  }

  return (
    <>
      <VesselViewNoSSR ves={ves} images={images} />
    </>
  );
};
