import AWS from 'aws-sdk';
// import 'dotenv/config';
// require('dotenv').config();
import { PromiseResult } from 'aws-sdk/lib/request';
// import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export async function fetchImgUrl(keyFromAws: string): Promise<string> {
  let currImageUrl;
  try {
    // Configure AWS SDK with the credentials and region
    AWS.config.update({
      accessKeyId: 'AKIAUXLH7DAVIEHB5FF2',
      secretAccessKey: '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',
      region: 'eu-north-1',

      // accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      // secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
      // region: process.env.NEXT_PUBLIC_AWS_REGION,

      // accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
      // secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
      // region: process.env.NEXT_PUBLIC_REGION,
    });

    const s3 = new AWS.S3();
    const bucketName = 'nyb-basket';
    // const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;

    // Fetch the image from Amazon S3 based on the imageUrl from the good prop
    const s3Object: PromiseResult<AWS.S3.GetObjectOutput, AWS.AWSError> =
      await s3.getObject({ Bucket: bucketName, Key: keyFromAws }).promise();

    if (s3Object.Body) {
      currImageUrl = URL.createObjectURL(new Blob([s3Object.Body as BlobPart]));
    } else {
      // Handle the case where s3Object.Body is undefined
      // eslint-disable-next-line
      console.error('S3 object body is undefined');
    }
    // setImageUrl(currImageUrl as string);
  } catch (error) {
    // eslint-disable-next-line
    console.error('Error:', error);
  }

  return currImageUrl as string;
}
