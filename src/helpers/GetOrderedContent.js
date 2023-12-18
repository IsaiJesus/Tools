export default function OrderedContent(content) {
  const OrderedContent = content
    .map((singleContent) => {
      return {
        ...singleContent,
        createdAt: singleContent.createdAt ? new Date(singleContent.createdAt) : new Date(),
        updatedAt: singleContent.updatedAt ? new Date(singleContent.updatedAt) : new Date(),
      };
    })
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  return OrderedContent;
}
