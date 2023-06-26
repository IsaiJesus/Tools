export default function Filter(topics, data) {
  const filteredTopics = topics.filter((topic) => {
    return (
      topic.titleTopic
        .toLowerCase()
        .includes(data.toLowerCase()) ||
      topic.category.toLowerCase().includes(data.toLowerCase()) ||
      topic.titleTopic
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(data.toLowerCase()) ||
      topic.category
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(data.toLowerCase())
    );
  });

  return filteredTopics;
}
