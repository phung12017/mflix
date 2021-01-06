import { connectToDatabase } from "../../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();  
  
  const movies = await db
    .collection("movies")
    .find()
    .project({title:1,poster:1,imdb:1})
    .limit(parseInt(req.query.limit))
    .sort({ metacritic: -1 })
    .toArray();
    res.json(movies);
};
