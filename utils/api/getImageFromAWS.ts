// import AWS from 'aws-sdk';
// // import 'dotenv/config';
// // require('dotenv').config();
// import { PromiseResult } from 'aws-sdk/lib/request';
// // import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// // eslint-disable-next-line
// // console.error('accessKeyId:', process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID);
// // // eslint-disable-next-line
// // console.error(
// //   'secretAccessKey:',
// //   process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
// // );
// // // eslint-disable-next-line
// // console.error('region:', process.env.NEXT_PUBLIC_AWS_REGION);

// export async function fetchImgUrl(keyFromAws: string): Promise<string> {
//   let currImageUrl;
//   try {
//     // Configure AWS SDK with the credentials and region
//     AWS.config.update({
//       // accessKeyId: 'AKIAUXLH7DAVIEHB5FF2',
//       // secretAccessKey: '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',
//       // region: 'eu-north-1',

//       accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
//       secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
//       region: process.env.NEXT_PUBLIC_AWS_REGION as string,
//     });

//     const s3 = new AWS.S3();
//     const bucketName = 'nyb-basket';
//     // const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;

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

//   // eslint-disable-next-line
//   console.error(currImageUrl, 'from get file');

//   return currImageUrl as string;
// }

// pages/api/getImage.ts
// import { Readable } from 'stream';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { key } = req.query;

//   if (!key || typeof key !== 'string') {
//     return res.status(400).json({ error: 'Invalid key parameter' });
//   }

//   // Fetch the key from your database based on the provided key parameter
//   // Replace this part with your actual database fetching logic
//   // Example: const dbKey = await fetchKeyFromDatabase(key);

//   // Assume dbKey is the key fetched from the database
//   // const dbKey = key;

//   const s3Client = new S3Client({ region: process.env.NEXT_PUBLIC_AWS_REGION as string });
//   const getObjectCommand = new GetObjectCommand({
//     Bucket: 'nyb-basket',
//     Key: key,
//   });

//   try {
//     const { Body } = await s3Client.send(getObjectCommand);
//     const imageBuffer = await Readable.from(Body).read();
//     const imageUrl = `data:image/jpeg;base64,${imageBuffer?.toString('base64')}`;

//     res.status(200).json({ imageUrl });
//   } catch (error) {
//     //eslint-disable-next-line
//     console.error('Error fetching image from AWS S3:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
