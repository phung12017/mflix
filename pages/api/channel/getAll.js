import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const channels = await db
    .collection("chanels")
    .aggregate([
      {
        $lookup:
        {
          from: "posts",
          localField: "_id",    // field in the orders collection
          foreignField: "id_channel",  // field in the items collection
          as: "data",
                  
        },  
      },
     
    ])
    .toArray();
  res.json(channels);
}