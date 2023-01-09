export default function OrderedTopics(topics) {
  const OrderedTopics = topics.map(topic => {
    return {
      ...topic,
      createdAt: topic.createdAt ? new Date(topic.createdAt) : new Date(),
      updatedAt: topic.updatedAt ? new Date(topic.updatedAt) : new Date(),
    };
  })
  .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  return OrderedTopics;
}