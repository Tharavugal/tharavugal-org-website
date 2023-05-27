import { connect } from '@/utils/db';

export default async function handler(req, res) {
  const client = await connect();
  const DB_NAME = process.env.DB_NAME;
  const collection = client.db(DB_NAME).collection('events');
  let output;

  switch (req.method) {
    case 'POST':
      const query = {
        status: 'Published',
        $text: { $search: req.body.title },
      };

      if (req.body.locations.length > 0) {
        query.locations = {
          $in: req.body.locations.map((i) => new RegExp(i.trim(), 'i')),
        };
      }

      const cursor = await collection
        .find(query, {
          projection: {
            _id: 0,
            title: 1,
            slug: 1,
            locations: 1,
            startedAt: 1,
          },
        })
        .sort({ startedAt: -1 })
        .limit(10);
      const data = await cursor.toArray();
      output = res.status(200).json({ data });
      break;
    default:
      output = res.status(401);
      break;
  }

  client.close();

  return output;
}
