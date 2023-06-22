import { useContext, useEffect, useState } from "react";
import ItemsContext from "context/ItemsContext";
import Warning from "../Warning";
import toast, { Toaster } from "react-hot-toast";
import styles from "../../styles/Home.module.css";

export default function NewItem(props) {
  const { addItem, editActive } = props;
  const {
    items,
    setItems,
    item,
    setItem,
    handleChange,
    setEditActive,
    initialStateEdit,
  } = useContext(ItemsContext);
  const selectedItems = [...items];
  //state to know if the content from input image is valid
  const [validImage, setValidImage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /\.(jpe?g|png|svg)$/i;
    if (item.type === "" || item.content === "") {
      toast.error("¡Añade contenido al item!");
    } else {
      //The image is not valid
      if (item.type === "image" && !regex.test(item.content)) {
        setValidImage(true);
      } else {
        setValidImage(false);
        if (editActive) {
          //Add an object and delete the selected
          selectedItems.splice(editActive.index, 1, item);
          setItems(selectedItems);
          setEditActive(initialStateEdit);
        } else {
          //Add an item
          selectedItems.push(item);
          setItems(selectedItems);
        }
      }
      setItem({
        type: "",
        content: "",
      });
    }
  };

  //If you have to edit an item, The content to appear in the input will be the content from the Array of 
  //items with the position of index
  useEffect(() => {
    if (editActive) {
      setItem({
        type: editActive.text,
        content: items[editActive.index].content,
      });
    }
  }, [editActive, items, setItem]);

  return (
    <>
      <div className={styles.formDivider}>
        {addItem === "subtitle" ? (
          <textarea
            name="subtitle"
            value={item.content ? item.content : ""}
            className={styles.formInputs}
            onChange={handleChange}
            placeholder="Introduce un subtítulo"
            autoComplete="off"
          ></textarea>
        ) : addItem === "text" ? (
          <textarea
            name="text"
            className={styles.formInputs}
            value={item.content ? item.content : ""}
            onChange={handleChange}
            placeholder="Introduce un texto o párrafo"
            autoComplete="off"
          ></textarea>
        ) : addItem === "url" ? (
          <>
            <input
              type="text"
              name="textUrl"
              className={styles.formInputs}
              value={item.content.textUrl ? item.content.textUrl : ""}
              onChange={handleChange}
              placeholder="Introduce el texto de la URL"
              autoComplete="off"
            />
            <input
              type="url"
              name="url"
              className={styles.formInputs}
              value={item.content.url ? item.content.url : ""}
              onChange={handleChange}
              placeholder="Introduce la URL"
              autoComplete="off"
            />
          </>
        ) : addItem === "code" ? (
          <>
            <input
              type="text"
              name="language"
              className={styles.formInputs}
              value={item.content.language ? item.content.language : ""}
              onChange={handleChange}
              placeholder="Introduce el lenguaje del código"
              autoComplete="off"
            />
            <textarea
              name="code"
              className={styles.formInputs}
              value={item.content.code ? item.content.code : ""}
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
            value={item.content ? item.content : ""}
            onChange={handleChange}
            placeholder="Introduce el link de tu imagen"
            autoComplete="off"
          />
        ) : (
          <Warning text={"Elige una opción determinada."} />
        )}
        <button onClick={handleSubmit} className={styles.formSubmit}>
          {editActive ? "Editar" : "Añadir"} item
        </button>
        {validImage && (
          <Warning
            text={"Introduce una imagen válida (jpg, jpeg, png, svg)."}
          />
        )}
      </div>
      <Toaster
        toastOptions={{
          duration: 2500,
        }}
      />
    </>
  );
}
