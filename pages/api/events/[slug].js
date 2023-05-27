import { connect } from '@/utils/db';

export default async function handler(req, res) {
  const client = await connect();
  const DB_NAME = process.env.DB_NAME;
  const collection = client.db(DB_NAME).collection('events');
  let output;

  switch (req.method) {
    case 'GET':
      const event = await collection.findOne(
        { slug: req.query.slug },
        {
          projection: {
            _id: 0,
            title: 1,
            locations: 1,
            startedAt: 1,
            startTz: 1,
            endedAt: 1,
            endTz: 1,
          },
        }
      );
      const data = { event };
      output = res.status(200).json({ data });
      break;

    default:
      output = res.status(401);
      break;
  }

  client.close();

  return output;
}
