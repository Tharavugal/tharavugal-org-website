import { connect } from '@/utils/db';

export default async function handler(req, res) {
  const client = await connect();
  const DB_NAME = process.env.DB_NAME;
  const collection = client.db(DB_NAME).collection('food-ingredients');
  let output;
  switch (req.method) {
    case 'GET':
      const data = await collection.findOne(
        { id: req.query.id },
        {
          projection: {
            _id: 0,
          },
        }
      );
      output = res.status(200).json({ data });
      break;

    default:
      output = res.status(401);
      break;
  }

  client.close();

  return output;
}
