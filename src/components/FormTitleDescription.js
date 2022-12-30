import { useContext } from "react";
import styles from "../styles/Home.module.css";
import FormContext from "context/FormContext";
import Warning from "./Warning";

export default function FormTitleDescription({ whatToAdd, form }) {
  const { handleChange } = useContext(FormContext);

  return (
    <div className={styles.formDivider}>
      <input
        type="text"
        name="title"
        value={form.title}
        className={styles.formInputs}
        onChange={handleChange}
        placeholder={
          whatToAdd === "herramienta"
            ? "Título de la herramienta"
            : whatToAdd === "tema"
            ? "Título del tema"
            : "Título"
        }
        autoComplete="off"
      />
      <textarea
        name="description"
        value={form.description}
        className={styles.formInputs}
        onChange={handleChange}
        placeholder={
          whatToAdd === "herramienta"
            ? "Descripción de la herramienta"
            : whatToAdd === "tema"
            ? "Descripción del tema"
            : "Descripción"
        }
        autoComplete="off"
      ></textarea>
      {whatToAdd === "herramienta" ? (
        <input
          type="text"
          name="imageTool"
          className={styles.formInputs}
          value={form.imageTool}
          onChange={handleChange}
          placeholder="Añade la imagen de la herramienta"
          autoComplete="off"
        />
      ) : whatToAdd === "tema" ? (
        <select
          name="categoryTopic"
          defaultValue={form.categoryTopic}
          className={styles.formInputs}
          onChange={handleChange}
        >
          <option>Elige la categoría del tema</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React JS">React JS</option>
          <option value="Flutter">Flutter</option>
          <option value="Java">Java</option>
          <option value="Web">Web</option>
        </select>
      ) : (
        <Warning text={"Elige una opción determinada."}/>
      )}
    </div>
  );
}
