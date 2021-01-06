import { connectToDatabase } from "../../util/mongodb";

 
export default async (req, res) => {
  const { db } = await connectToDatabase();  
 
 

  const news = await db
  .collection('chanels')
  .find()
  .toArray()
  res.json(news)
};
