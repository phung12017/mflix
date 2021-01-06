import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";
export default async (req, res) => {
  
  const { db } = await connectToDatabase();


  const page = parseInt(req.query.page) || 1
  const limit = parseInt(10)
  const count = parseInt(await db.collection('items').count())
  const maxPage = Math.ceil(count / limit)
  let next = `http://flix-sigma.vercel.app/api/post/getAll?page=${page + 1}`
  if (page === maxPage) {
    next = null
  }
  let previous = null
  if (page === 1) {
    previous = null
  } else if (page == 2) {
    previous = `http://flix-sigma.vercel.app/api/post/getAll`
  } else if (page >= 3) {
    previous = `http://flix-sigma.vercel.app/api/post/getAll?page=${page - 1}`
  }


  const posts = await db
    .collection("items")
    .find()
    .limit(limit)
    .skip((page - 1) * limit)
    .toArray();
    res.json({
      count: count,

      next: next,
      previous: previous,
      result: posts
    });
};
