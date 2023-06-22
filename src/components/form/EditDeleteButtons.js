import { useContext, useState } from "react";
import ItemsContext from "context/ItemsContext";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import styles from "../../styles/Home.module.css";

export default function EditDeleteButtons({ index }) {
  const { items, setItems, setEditActive, setAddItem } = useContext(ItemsContext);
  const selectedItems = [...items];

  //state to make appear the input to edit an item
  const [edit, setEdit] = useState(false);

  const handleEdit = (index) => {
    setEdit(!edit);
    if (!edit) {
      setAddItem("");
      const itemToEdit = items[index];
      if (itemToEdit) {
        //set the state with the index and type
        switch (itemToEdit.type) {
          case "subtitle":
            setEditActive({ index: index, text: "subtitle" });
            break;
          case "text":
            setEditActive({ index: index, text: "text" });
            break;
          case "link":
            setEditActive({ index: index, text: "link" });
            break;
          case "code":
            setEditActive({ index: index, text: "code" });
            break;
          case "image":
            setEditActive({ index: index, text: "image" });
            break;
        }
      }
    } else {
      setEditActive({
        index: null,
        text: "",
      });
    }
  };
  const handleDelete = (index) => {
    selectedItems.splice(index, 1);
    setItems(selectedItems);
    setEditActive({
      index: null,
      text: "",
    });
  };

  return (
    <div className={styles.boxButtonsItem}>
      <button onClick={() => handleEdit(index)} className={styles.buttonItem}>
        <FaPen />
      </button>
      <button onClick={() => handleDelete(index)} className={styles.buttonItem}>
        <FaTrashAlt />
      </button>
    </div>
  );
}