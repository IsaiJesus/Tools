import { useState } from "react";
import FormTitleDescription from "./FormTitleDescription";
import NewElement from "./NewElement";

export default function Form() {
  const [whatToAdd, setWhatToAdd] = useState("");
  const [addElement, setAddElement] = useState("");

  const handleWhatToAdd = (e) => {
    setWhatToAdd(e.target.value);
  };
  const handleAddElement = (e) => {
    setAddElement(e.target.value);
  };

  return (
    <form>
      <h1>¿Qué quieres agregar?</h1>
      <select name="whatToAdd" onChange={handleWhatToAdd}>
        <option>Elige lo que quieres subir</option>
        <option value="herramienta">Una herramienta</option>
        <option value="tema">Un tema</option>
      </select>
      {whatToAdd !== "" && <FormTitleDescription whatToAdd={whatToAdd} />}
      {
        whatToAdd == "tema" && addElement !== "" && <NewElement addElement={addElement}/>
      }
      {whatToAdd == "tema" && whatToAdd !== "" && (
        <select name="addElement" onChange={handleAddElement}>
          <option>Añade un nuevo elemento</option>
          <option value="subtitulo">Subtitulo</option>
          <option value="texto">Texto/párrafo</option>
          <option value="link">Link</option>
          <option value="codigo">Código</option>
          <option value="imagen">Imagen</option>
        </select>
      )}
      <button>Subir</button>
    </form>
  );
}
