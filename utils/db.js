import { MongoClient, ServerApiVersion } from "mongodb";

export async function connect() {
  const uri =
    "mongodb+srv://dbUser:VktULpQvMe33n1eN@cluster0.bpygkrx.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  try {
    await client.connect();
  } catch (error) {
    console.log("Error", error);
    client.close();
  }

  return client;
}