import { dbConnect } from "utils/mongoose";
import Articles from "models/Articles";

dbConnect();

export default async function handler(req, res) {
  const {
    method,
    body,
    query: { slug },
  } = req;

  switch (method) {
    case "GET":
      try {
        const article = await Articles.findOne({ slug });
        if (!article) return res.status(404).json({ msg: "Article not found" });
        return res.status(200).json(article);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }

    case "PUT":
      try {
        const articleUpdate = await Articles.findOneAndUpdate({ slug }, body, {
          new: true,
        });
        if (!articleUpdate)
          return res.status(404).json({ msg: "Article not found" });
        return res.status(200).json(articleUpdate);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }

    case "DELETE":
      try {
        const deletedArticle = await Articles.findOneAndDelete({ slug });
        if (!deletedArticle)
          return res.status(400).json({ msg: "Article not found" });
        return res.status(200).json(deletedArticle);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}