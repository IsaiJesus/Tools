export default function Filter(articles, data) {
  const filteredArticles = articles.filter((article) => {
    return (
      article.title
        .toLowerCase()
        .includes(data.toLowerCase()) ||
      article.category.toLowerCase().includes(data.toLowerCase()) ||
      article.title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(data.toLowerCase()) ||
      article.category
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(data.toLowerCase())
    );
  });

  return filteredArticles.slice(0, 8);
}
