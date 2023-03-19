import { MongoClient, ServerApiVersion } from 'mongodb';

export async function connect() {
  const DB_URI = process.env.DB_URI;
  const client = new MongoClient(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  try {
    await client.connect();
  } catch (error) {
    console.log('Error', error);
    client.close();
  }

  return client;
}
