import { MongoClient } from "mongodb";

//  /api/new-meeting

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://admin:admin123@cluster0.duy5n.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Destination posted!" });
  }
}

export default handler;
