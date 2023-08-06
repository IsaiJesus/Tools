import { useContext, useEffect, useState } from "react";
import FormHeaderContext from "context/FormHeaderContext";
import Warning from "../Warning";
import styles from "../../styles/Home.module.css";

export default function FormHeader({ whatToAdd, formHeader }) {
  const { handleChange } = useContext(FormHeaderContext);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    fetch(`${process.env.HOST_URL}/api/tools`)
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
            className={styles.formInput}
            onChange={handleChange}
            placeholder="Título de la herramienta"
            autoComplete="off"
          />
          <textarea
            name="description"
            required
            value={formHeader.description}
            className={styles.formInput}
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
            className={styles.formInput}
            onChange={handleChange}
            placeholder="Título del tema"
            autoComplete="off"
          />
          <textarea
            name="description"
            required
            value={formHeader.description}
            className={styles.formInput}
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
          className={styles.formInput}
          value={formHeader.imageTool}
          onChange={handleChange}
          placeholder="Añade la imagen de la herramienta"
          autoComplete="off"
        />
      ) : whatToAdd === "tema" ? (
        <select
          name="categoryTopic"
          required={whatToAdd === "tema"}
          className={styles.formSelect}
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
