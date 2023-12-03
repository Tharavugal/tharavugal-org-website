import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      const S3 = new S3Client({
        region: 'auto',
        endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID,
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
        },
      });
      const url = await getSignedUrl(
        S3,
        new PutObjectCommand({
          Bucket: process.env.R2_BUCKET_NAME,
          Key: req.body.key,
        }),
        { expiresIn: 60 * 5 }
      );

      return res.status(200).json({ url });
  }
}
