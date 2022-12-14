import { useContext, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import FormHeaderContext from "context/FormHeaderContext";
import Warning from "./Warning";

export default function FormHeader({ whatToAdd, formHeader }) {
  const { handleChange } = useContext(FormHeaderContext);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    //const res = await fetch("http://localhost:3000/api/tools");
    //const data = await res.json();
    //setCategories(data);
    fetch('http://localhost:3000/api/tools')
      .then(res => res.json())
      .then(data => {
        setCategories(data.map(category => category.titleTool));
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className={styles.formDivider}>
      {whatToAdd === "herramienta" && (
        <>
          <input
            type="text"
            name="title"
            required
            value={formHeader.title}
            className={styles.formInputs}
            onChange={handleChange}
            placeholder="Título de la herramienta"
            autoComplete="off"
          />
          <textarea
            name="description"
            required
            value={formHeader.description}
            className={styles.formInputs}
            onChange={handleChange}
            placeholder="Descripción de la herramienta"
            autoComplete="off"
          ></textarea>
        </>
      )}
      {whatToAdd === "tema" && (
        <>
          <input
            type="text"
            name="title"
            required
            value={formHeader.title}
            className={styles.formInputs}
            onChange={handleChange}
            placeholder="Título del tema"
            autoComplete="off"
          />
          <textarea
            name="description"
            required
            value={formHeader.description}
            className={styles.formInputs}
            onChange={handleChange}
            placeholder="Descripción del tema"
            autoComplete="off"
          ></textarea>
        </>
      )}
      {whatToAdd === "herramienta" ? (
        <input
          type="text"
          name="imageTool"
          required={whatToAdd === "herramienta"}
          className={styles.formInputs}
          value={formHeader.imageTool}
          onChange={handleChange}
          placeholder="Añade la imagen de la herramienta"
          autoComplete="off"
        />
      ) : whatToAdd === "tema" ? (
        <select
          name="categoryTopic"
          required={whatToAdd === "tema"}
          className={styles.formInputs}
          defaultValue={formHeader.categoryTopic}
          onChange={handleChange}
        >
          <option value="">Elige la categoría del tema</option>
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      ) : (
        <Warning text={"Elige una opción determinada."} />
      )}
    </div>
  );
}
