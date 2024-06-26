import { useContext, useEffect, useState } from "react";
import HOST_URL from "consts/Host";
import FormInputsContext from "context/FormInputsContext";
import Warning from "../Warning";
import styles from "../../styles/Home.module.css";

export default function FormInputs({ whatToAdd, formInputs }) {
  const { handleChange } = useContext(FormInputsContext);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    fetch(`${HOST_URL}api/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.map((category) => category.category));
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className={styles.formDivision}>
      {whatToAdd === "article" && (
        <>
          <input
            type="text"
            name="title"
            required
            value={formInputs.title}
            className={styles.inputForm}
            onChange={handleChange}
            placeholder="Título del artículo"
            autoComplete="off"
          />
          <textarea
            name="description"
            required
            value={formInputs.description}
            className={styles.inputForm}
            onChange={handleChange}
            placeholder="Descripción del artículo"
            autoComplete="off"
          ></textarea>
          <select
            name="category"
            required
            className={styles.selectForm}
            defaultValue={formInputs.category}
            onChange={handleChange}
          >
            <option>Elige la categoría del artículo</option>
            {categories.map((category, index) => {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
          <textarea
            name="content"
            required
            value={formInputs.content}
            className={styles.inputForm}
            onChange={handleChange}
            placeholder="Contenido del artículo (MarkDown)"
            autoComplete="off"
          ></textarea>
        </>
      )}
      {whatToAdd === "category" && (
        <>
          <input
            type="text"
            name="categoryName"
            required
            value={formInputs.categoryName}
            className={styles.inputForm}
            onChange={handleChange}
            placeholder="Nombre de la categoría"
            autoComplete="off"
          />
          <input
            type="text"
            name="img"
            required
            value={formInputs.img}
            className={styles.inputForm}
            onChange={handleChange}
            placeholder="Imagen de la categoría"
            autoComplete="off"
          />
        </>
      )}
      {whatToAdd !== "article" && whatToAdd !== "category" && (
        <Warning text={"Elige una opción determinada."} />
      )}
      {whatToAdd === "article" ? (
        <>
          <div className={styles.boxMD}>
            <b>Título:</b> # <br />
            <b>Subtítulo 1:</b> ## <br />
            <b>Subtítulo 2:</b> ### <br /> <br />
            <b>Texto en negrita:</b> ** ó __
            <br />
            <b>Texto en itálica:</b> * <br />
            <b>Texto tachado:</b> ~~
            <br /> <br />
            <b>Línea de división:</b> ___ <br /> <br />
            <b>Lista desordenada:</b> - <br />
            <b>Lista ordenada:</b> 1. <br />
            <b>Lista de tareas:</b> - [ ] <br />
            <b>Lista de tareas hecha:</b> - [x] <br />
            <b>Blockquote:</b> {">"} <br /> <br />
            <b>Imagen:</b> ![Texto](URL) <br />
            <b>Tabla:</b> | Títulos | |--| | Contenido | <br />
            <b>URL:</b> [Texto](URL) <br /> <br />
            <b>Código:</b> ~~~ Lenguaje de programación ó `` <br /> <br />
            <b>Katex:</b> $$
          </div>
        </>
      ) : null}
    </div>
  );
}
