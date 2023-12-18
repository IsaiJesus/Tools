export default function GenerateSlug(text) {
  //Expresión regular para permitir solo letras, números y espacios en blanco
  const regex = /^[a-zA-Z0-9\s]+$/;
  //Reemplazar los espacios por guiones
  let slug = text.replace(/\s+/g, "-");

  //Quitar acentos y caracteres especiales
  slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  //Convertir a minúsculas
  slug = slug.toLowerCase();

  //Verificar si el input contiene caracteres no permitidos
  if (!regex.test(slug)) {
    //Elimina caracteres no permitidos utilizando replace() con una expresión regular
    const filteredText = slug.replace(
      /[!¡@#$%^&*()_+=[\]{}`;':"\\|°,.<>/¿?~]/g,
      ""
    );
    
    //Si no hay caracteres no permitidos, devolver el texto original
    return filteredText;
  }

  return slug;
}
