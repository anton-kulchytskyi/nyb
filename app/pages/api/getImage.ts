// import { Readable } from 'stream';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { key } = req.query;

//   if (!key || typeof key !== 'string') {
//     return res.status(400).json({ error: 'Invalid key parameter' });
//   }

//   // Fetch the key from your database based on the provided key parameter
//   // Replace this part with your actual database fetching logic
//   // Example: const dbKey = await fetchKeyFromDatabase(key);

//   // Assume dbKey is the key fetched from the database
//   // const dbKey = key;

//   const s3Client = new S3Client({
//     region: process.env.NEXT_PUBLIC_AWS_REGION as string,
//   });
//   const getObjectCommand = new GetObjectCommand({
//     Bucket: 'nyb-basket',
//     Key: key,
//   });

//   try {
//     const { Body } = await s3Client.send(getObjectCommand);

//     // Check if Body is undefined
//     if (!Body) {
//       return res.status(500).json({ error: 'Empty response body from AWS S3' });
//     }

//     const imageBuffer = await streamToBuffer(new Blob([Body as BlobPart]));

//     const imageUrl = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
//     res.status(200).json({ imageUrl });
//   } catch (error) {
//     // eslint-disable-next-line
//     console.error('Error fetching image from AWS S3:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// // Helper function to convert stream to buffer
// async function streamToBuffer(stream: Readable): Promise<Buffer> {
//   const chunks: Uint8Array[] = [];
//   return new Promise((resolve, reject) => {
//     stream.on('data', (chunk: Uint8Array) => {
//       chunks.push(chunk);
//     });
//     stream.on('end', () => {
//       resolve(Buffer.concat(chunks));
//     });
//     stream.on('error', (error: Error) => {
//       reject(error);
//     });
//   });
// }
