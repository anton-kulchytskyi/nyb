// eslint-disable-next-line
console.log('accessKeyId:', process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID);
// eslint-disable-next-line
console.log('secretAccessKey:', process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY);
// eslint-disable-next-line
console.log('region:', process.env.NEXT_PUBLIC_AWS_REGION);

import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';

const client = new S3Client({
  credentials: {
    accessKeyId: 'AKIAUXLH7DAVIEHB5FF2',
    secretAccessKey: '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',
    // accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
    // secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
  },
  // region: process.env.NEXT_PUBLIC_AWS_REGION as string,
  region: 'eu-north-1',
});

export async function fetchImgUrl(keyFromAws: string) {
  let currImageUrl;
  const command = new GetObjectCommand({
    Bucket: 'nyb-basket',
    Key: keyFromAws,
  });

  try {
    const response = await client.send(command);
    const str = await response.Body?.transformToString('base64');
    currImageUrl = `data:image/png;base64,${str}`;
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
  }
  return currImageUrl as unknown as string;
}
