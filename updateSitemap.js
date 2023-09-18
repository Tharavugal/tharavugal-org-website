import fs from 'fs';
import { toXML } from 'jstoxml';
import { format } from 'date-fns';
import { connect } from './utils/db';

const baseUrl = {
  loc: 'https://tharavugal.org/',
  lastmod: '2023-09-16',
};

const urlset = {
  xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
  'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
  'xsi:schemaLocation':
    'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
};

async function run() {
  console.log('Updating sitemap...');
  const client = await connect();
  const DB_NAME = 'tharavugal';
  const collection = client.db(DB_NAME).collection('events');
  const cursor = await collection.find(
    {},
    { projection: { _id: 0, slug: 1, updatedAt: 1 } }
  );
  const events = await cursor.toArray();
  const xmlEvents = events.map((e) => ({
    url: {
      loc: 'https://tharavugal.org/events/' + e.slug,
      lastmod: format(e.updatedAt, 'yyyy-MM-dd'),
    },
  }));
  const xml = toXML(
    { _name: 'urlset', _attrs: urlset, _content: [{url: baseUrl}, ...xmlEvents] },
    { header: true, indent: ' ' }
  );
  console.log('Writing xml into sitemap.xml');
  fs.writeFileSync('public/sitemap.xml', xml);
  process.exit();
}

run();
