import { useContext } from "react";
import styles from "../styles/Home.module.css";
import ItemsContext from "context/ItemsContext"; 
import Warning from "./Warning";

export default function NewItem({ addItem }) {
  const { items, setItems, item, handleChange } = useContext(ItemsContext);
  const newItems = [...items];

  const handleSubmitItem = (e) => {
    e.preventDefault();
    newItems.push(item);
    setItems(newItems);
  }

  return (
    <div className={styles.formDivider}>
      {addItem === "subtitulo" ? (
        <textarea
          name="subtitle"
          className={styles.formInputs}
          onChange={handleChange}
          placeholder="Introduce un subtítulo"
          autoComplete="off"
        ></textarea>
      ) : addItem === "texto" ? (
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
      ) : addItem === "codigo" ? (
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
      ) : addItem === "imagen" ? (
        <input
          name="image"
          type="text"
          className={styles.formInputs}
          onChange={handleChange}
          placeholder="Introduce el link de tu imagen"
          autoComplete="off"
        />
      ) : (
        <Warning/>
      )}
      <button onClick={handleSubmitItem} className={styles.formSubmit}>Añadir item</button>
    </div>
  );
}
