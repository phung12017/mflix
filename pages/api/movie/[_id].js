import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
    const { db } = await connectToDatabase();
    const movies = await db
    .collection("movies")
    .find({_id:ObjectId(req.query._id)})
    .sort({ metacritic: -1 })
    .toArray();
    res.json(movies);
}