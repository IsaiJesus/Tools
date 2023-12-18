import { dbConnect } from "utils/mongoose";
import Articles from "models/Articles";
import Categories from "models/Categories";

dbConnect();

export default async function handler(req, res) {
  const { method, body, query: {query} } = req;

  switch (method) {
    case "GET":
      try {
        const articles = await Articles.find({
          $or: [
            { title: { $regex: new RegExp(query, 'i') } },  // Búsqueda por título
            { category: { $regex: new RegExp(query, 'i') } },  // Búsqueda por categoría
          ],
        }).lean();
        // Obtén todas las categorías de los artículos
        const categories = await Categories.find().lean();
        // Crea un mapa de categorías para facilitar la búsqueda por categoría
        const categoryMap = {};
        categories.forEach((category) => {
          categoryMap[category.category] = category;
        });
        // Modifica cada artículo para incluir la información de la categoría
        const articlesSearch = articles.map((article) => ({
          ...article,
          img: categoryMap[article.category]
            ? categoryMap[article.category].img
            : null,
        }));
        return res.status(200).json(articlesSearch);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
}
