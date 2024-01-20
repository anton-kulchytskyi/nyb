// import AWS from 'aws-sdk';
// import { PromiseResult } from 'aws-sdk/lib/request';

// // eslint-disable-next-line
// console.log('accessKeyId:', process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID);
// // eslint-disable-next-line
// console.log(
//   'secretAccessKey:',
//   process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
// );
// // eslint-disable-next-line
// console.log('region:', process.env.NEXT_PUBLIC_AWS_REGION);

// export async function fetchImgUrl(keyFromAws: string): Promise<string> {
//   let currImageUrl;
//   try {
//     // Configure AWS SDK with the credentials and region
//     AWS.config.update({
//       accessKeyId: 'AKIAUXLH7DAVIEHB5FF2',
//       secretAccessKey: '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',
//       region: 'eu-north-1',

//       // accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
//       // secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
//       // region: process.env.NEXT_PUBLIC_AWS_REGION as string,
//     });

//     const s3 = new AWS.S3();
//     const bucketName = 'nyb-basket';

//     // Fetch the image from Amazon S3 based on the imageUrl from the good prop
//     const s3Object: PromiseResult<AWS.S3.GetObjectOutput, AWS.AWSError> =
//       await s3.getObject({ Bucket: bucketName, Key: keyFromAws }).promise();

//     if (s3Object.Body) {
//       currImageUrl = URL.createObjectURL(new Blob([s3Object.Body as BlobPart]));
//     } else {
//       // Handle the case where s3Object.Body is undefined
//       // eslint-disable-next-line
//       console.error('S3 object body is undefined');
//     }
//     // setImageUrl(currImageUrl as string);
//   } catch (error) {
//     // eslint-disable-next-line
//     console.error('Error:', error);
//   }

//   return currImageUrl as string;
// }

import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';

const client = new S3Client({
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
  },
  region: process.env.NEXT_PUBLIC_AWS_REGION as string,
});

export async function fetchImgUrl(keyFromAws: string) {
  let currImageUrl;
  const command = new GetObjectCommand({
    Bucket: 'nyb-basket',
    Key: keyFromAws,
  });

  // eslint-disable-next-line
  // console.log(client);

  try {
    const response = await client.send(command);
    // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    const str = await response.Body?.transformToString('base64');
    // eslint-disable-next-line
    console.log(str);
    currImageUrl = `data:image/png;base64,${str}`;
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
  }
  // eslint-disable-next-line
  // console.log(currImageUrl);
  return currImageUrl as unknown as string;
}
