import { Metadata } from "next";
import { getVesselById } from '@/utils/api/getAllVessels';
import { fetchImgUrl } from '@/utils/api/getImageFromAWS';
import { VesselView } from './VesselView';

type Props = {
  params: {
    id: string;
  }
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  return {
    title: `Yacht ${id} | Norse Yacht Co`,
  };
}


export default async function Vessel({ params: { id } }: Props) {
  const ves = await getVesselById(`/${id}`);
  const images = await loadAllPhtosFromAWS(ves.vessel_images);

  async function loadAllPhtosFromAWS(images: any) {
    const arrayOfFetchImages = [];

    for (let i = 0; i < images.length; i++) {
      const img = await fetchImgUrl(images[i].yacht_image_key);
      arrayOfFetchImages.push(img);
    }

    return arrayOfFetchImages;
  }

  return (
    <>
      <VesselView ves={ves} images={images} />
    </>
  )
}
