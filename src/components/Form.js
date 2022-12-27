import { useContext, useState } from "react";
import styles from "../styles/Home.module.css";
import FormContext from "context/FormContext";
import ItemsContext from "context/ItemsContext";
import FormTitleDescription from "./FormTitleDescription";
import NewItem from "./NewItem";

export default function Form() {
  const { form, setForm, initialState } = useContext(FormContext);
  const { setItem } = useContext(ItemsContext);

  const [whatToAdd, setWhatToAdd] = useState("");
  const [addItem, setAddItem] = useState("");

  const handleWhatToAdd = (e) => {
    setWhatToAdd(e.target.value);
    setForm(initialState);
  };
  const handleAddItem = (e) => {
    setAddItem(e.target.value);
    setItem({
      type: "",
      content: ""
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enviado");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>¿Qué quieres agregar?</h1>
      <select
        name="whatToAdd"
        className={styles.formInputs}
        onChange={handleWhatToAdd}
      >
        <option>Elige lo que quieres subir</option>
        <option value="herramienta">Una herramienta</option>
        <option value="tema">Un tema</option>
      </select>
      {whatToAdd !== "" && <FormTitleDescription whatToAdd={whatToAdd} form={form}/>}
      {whatToAdd == "tema" && whatToAdd !== "" && (
        <select
        name="addItem"
        className={styles.formInputs}
          onChange={handleAddItem}
        >
          <option>Añade un nuevo elemento</option>
          <option value="subtitulo">Subtítulo</option>
          <option value="texto">Texto/párrafo</option>
          <option value="link">Link</option>
          <option value="codigo">Código</option>
          <option value="imagen">Imagen</option>
        </select>
      )}
      {whatToAdd == "tema" && addItem !== "" && <NewItem addItem={addItem} />}
      <button className={styles.formSubmit}>Subir</button>
    </form>
  );
}
