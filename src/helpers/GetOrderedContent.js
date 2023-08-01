export default function OrderedContent(contents) {
  const OrderedContent = contents
    .map((content) => {
      return {
        ...content,
        createdAt: content.createdAt ? new Date(content.createdAt) : new Date(),
        updatedAt: content.updatedAt ? new Date(content.updatedAt) : new Date(),
      };
    })
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  return OrderedContent;
}
