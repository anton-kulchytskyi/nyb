import { Metadata } from 'next';
import Gallery from '@/components/Gallery/Gallery';
import { getVesselById } from '@/utils/api/getAllVessels';
import { fetchImgUrl } from '@/utils/api/getImageFromAWS';
import { Images } from '@/interfaces/vessel.interface';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: `Yacht ${id} | Gallery | Norse Yacht Co`,
  };
}

const YachtGallery = async ({ params: { id } }: Props) => {
  const yacht = await getVesselById(`/${id}`);
  const images = await loadAllPhotosFromAWS(yacht.yacht_images);

  async function loadAllPhotosFromAWS(images: Images[]) {
    const arrayOfFetchImages = [];

    for (let i = 0; i < images.length; i++) {
      const img = await fetchImgUrl(images[i].yacht_image_key);
      arrayOfFetchImages.push(img);
    }

    return arrayOfFetchImages;
  }

  return (
    <Gallery
      vessel={yacht}
      images={images}
    />
  );
};

export default YachtGallery;

// const page = () => {
//   return (
//     <Gallery />
//   );
// };

// export default page;
