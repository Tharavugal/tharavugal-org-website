import { connect } from '@/utils/db';
import { endOfDay, startOfDay } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

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

      if (Array.isArray(req.body.locations) && req.body.locations.length > 0) {
        query = { ...query, locations: { $in: req.body.locations } };
      }

      if (Array.isArray(req.body.tags) && req.body.tags.length > 0) {
        query = { ...query, categories: { $in: req.body.tags } };
      }

      if (req.body.from && !req.body.to) {
        query = {
          ...query,
          dateTz: {
            $gte: new Date(req.body.from),
          },
        };
      }

      if (req.body.from && req.body.to) {
        query = {
          ...query,
          dateTz: {
            $gte: new Date(req.body.from),
            $lte: new Date(req.body.to),
          },
        };
      }

      const aggArr = [
        { $sort: { startedAt: req.body.sort === 'Descending' ? -1 : 1 } },
        {
          $addFields: {
            dateTz: {
              $dateFromParts: {
                year: { $year: '$startedAt' },
                month: { $month: '$startedAt' },
                day: { $dayOfMonth: '$startedAt' },
              },
            },
          },
        },
        {
          $match: query,
        },
        { $limit: 10 },
        {
          $project: {
            _id: 0,
            title: 1,
            slug: 1,
            locations: 1,
            startedAt: 1,
            startTz: 1,
            categories: 1,
          },
        },
      ];

      if (req.body.text) {
        aggArr.unshift({
          $match: { $text: { $search: req.body.text } },
        });
      }

      const cursor = eventsCol.aggregate(aggArr, {
        maxTimeMS: 60000,
        allowDiskUse: true,
      });
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
