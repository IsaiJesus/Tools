import { dbConnect } from "utils/mongoose";
import Categories from "models/Categories";

dbConnect();

export default async function handler(req, res) {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const category = await Categories.findById( id );
        if (!category) return res.status(404).json({ msg: "Category not found" });
        return res.status(200).json(category);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }

    case "PUT":
      try {
        const categoryUpdate = await Categories.findByIdAndUpdate( id , body, {
          new: true,
        });
        if (!categoryUpdate)
          return res.status(404).json({ msg: "Category not found" });
        return res.status(200).json(categoryUpdate);
      } catch (error) {
        return res.status(500).json({ msg: error.message });
      }

    case "DELETE":
      try {
        const deletedCategory = await Categories.findByIdAndDelete(id);
        if (!deletedCategory)
          return res.status(400).json({ msg: "Category not found" });
        return res.status(200).json(deletedCategory);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}