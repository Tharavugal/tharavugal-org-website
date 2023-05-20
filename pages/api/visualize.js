import { connect } from '@/utils/db';

export default async function handler(req, res) {
  const client = await connect();
  const DB_NAME = process.env.DB_NAME;
  const collection = client.db(DB_NAME).collection('events');
  let output;

  switch (req.method) {
    case 'POST':
      const cursor = await collection.aggregate([
        {
          $match: {
            status: 'Published',
            categories: req.body.categories,
            locations: { $in: req.body.locations },
          },
        },
        {
          $match: {
            $expr: {
              $and: [
                {
                  $gte: [
                    '$startedAt',
                    {
                      $dateFromString: {
                        dateString: req.body.from,
                        format: '%Y-%m-%d',
                        timezone: req.body.timezone,
                      },
                    },
                  ],
                },
                {
                  $lte: [
                    '$startedAt',
                    {
                      $dateFromString: {
                        dateString: req.body.to,
                        format: '%Y-%m-%d',
                        timezone: req.body.timezone,
                      },
                    },
                  ],
                },
              ],
            },
          },
        },
        {
          $group: {
            _id: {
              $dateToString: {
                date: '$startedAt',
                format: '%Y-%m-%d',
                timezone: '$startTz',
              },
            },
            total: {
              $count: {},
            },
          },
        },
        {
          $project: {
            _id: 0,
            label: '$_id',
            total: '$total',
          },
        },
        {
          $sort: {
            label: 1,
          },
        },
      ]);

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
