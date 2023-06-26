export default function GenerateSlug(title) {
  // Reemplazar los espacios por guiones
  let slug = title.replace(/\s+/g, "-");

  // Quitar acentos y caracteres especiales
  slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Convertir a minúsculas
  slug = slug.toLowerCase();

  return slug;
}
