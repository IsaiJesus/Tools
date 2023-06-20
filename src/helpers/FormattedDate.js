export default function FormattedDate(date) {
  const newDate = new Date(date);

  const formattedDate = newDate.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
}
