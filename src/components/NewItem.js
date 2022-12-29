import { useContext } from "react";
import styles from "../styles/Home.module.css";
import ItemsContext from "context/ItemsContext";
import Warning from "./Warning";

export default function NewItem({ addItem, editActive }) {
  const { items, setItems, item, handleChange, setEditActive, initialStateEdit } = useContext(ItemsContext);
  const selectedItems = [...items];

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editActive){
      selectedItems.splice(editActive.index, 1, item);
      setItems(selectedItems);
      setEditActive(initialStateEdit);
    }else{
      selectedItems.push(item);
      setItems(selectedItems);
    }
  };

  return (
    <div className={styles.formDivider}>
      {addItem === "subtitle" ? (
        <textarea
          name="subtitle"
          className={styles.formInputs}
          onChange={handleChange}
          placeholder="Introduce un subtítulo"
          autoComplete="off"
        ></textarea>
      ) : addItem === "text" ? (
        <textarea
          name="text"
          className={styles.formInputs}
          onChange={handleChange}
          placeholder="Introduce un texto o párrafo"
          autoComplete="off"
        ></textarea>
      ) : addItem === "link" ? (
        <>
          <input
            type="text"
            name="textLink"
            className={styles.formInputs}
            onChange={handleChange}
            placeholder="Introduce el texto del link"
            autoComplete="off"
          />
          <input
            type="text"
            name="link"
            className={styles.formInputs}
            onChange={handleChange}
            placeholder="Introduce el link"
            autoComplete="off"
          />
        </>
      ) : addItem === "code" ? (
        <>
          <input
            type="text"
            name="language"
            className={styles.formInputs}
            onChange={handleChange}
            placeholder="Introduce el lenguaje del código"
            autoComplete="off"
          />
          <textarea
            name="code"
            className={styles.formInputs}
            onChange={handleChange}
            placeholder="Introduce tu código"
            autoComplete="off"
          ></textarea>
        </>
      ) : addItem === "image" ? (
        <input
          name="image"
          type="text"
          className={styles.formInputs}
          onChange={handleChange}
          placeholder="Introduce el link de tu imagen"
          autoComplete="off"
        />
      ) : (
        <Warning />
      )}
      <button onClick={handleSubmit} className={styles.formSubmit}>
        {editActive ? "Editar" : "Añadir"} item
      </button>
    </div>
  );
}
