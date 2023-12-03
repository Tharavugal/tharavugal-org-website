import { connect } from '@/utils/db';

export default async function handler(req, res) {
  const client = await connect();
  const DB_NAME = process.env.DB_NAME;
  const eventsCol = client.db(DB_NAME).collection('events');
  const foodIngCol = client.db(DB_NAME).collection('food-ingredients');
  let output;

  switch (req.method) {
    case 'GET':
      const query = {
        status: 'Published',
        $text: { $search: req.query.q },
      };

      let cursor = await eventsCol
        .find(query, {
          projection: {
            _id: 0,
            title: 1,
            slug: 1,
            startedAt: 1,
          },
        })
        .sort({ startedAt: -1 })
        .limit(10);
      const events = await cursor.toArray();

      cursor = await foodIngCol
        .find(
          { $text: { $search: req.query.q } },
          {
            projection: {
              _id: 0,
              name: 1,
              slug: 1,
              foodType: 1,
            },
          }
        )
        .limit(10);
      const foodIngredients = await cursor.toArray();

      output = res.status(200).json({ data: { events, foodIngredients } });
      break;
    default:
      output = res.status(401);
      break;
  }

  client.close();

  return output;
}
