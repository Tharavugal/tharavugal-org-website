import { connect } from '@/utils/db';

export default async function handler(req, res) {
  const client = await connect();
  const DB_NAME = process.env.DB_NAME;
  const eventsCol = client.db(DB_NAME).collection('events');
  let output;

  switch (req.method) {
    case 'POST':
      let query = {
        status: 'Published',
      };

      if (req.body.text) {
        query = { ...query, $text: { $search: req.body.text } };
      }

      if (Array.isArray(req.body.locations) && req.body.locations.length > 0) {
        query = { ...query, locations: { $in: req.body.locations } };
      }

      if (Array.isArray(req.body.tags) && req.body.tags.length > 0) {
        query = { ...query, categories: { $in: req.body.tags } };
      }

      if (req.body.from && !req.body.to) {
        query = { ...query, startedAt: { $gte: new Date(req.body.from) } };
      }

      if (req.body.from && req.body.to) {
        query = {
          ...query,
          startedAt: {
            $gte: new Date(req.body.from),
            $lte: new Date(req.body.to),
          },
        };
      }

      let cursor = await eventsCol
        .find(query, {
          projection: {
            _id: 0,
            title: 1,
            slug: 1,
            locations: 1,
            startedAt: 1,
            startTz: 1,
            categories: 1,
          },
        })
        .sort({ startedAt: req.body.sort === 'Descending' ? -1 : 1 })
        .limit(10);
      const events = await cursor.toArray();
      output = res.status(200).json({ events });
      break;
    default:
      output = res.status(401);
      break;
  }

  client.close();

  return output;
}
