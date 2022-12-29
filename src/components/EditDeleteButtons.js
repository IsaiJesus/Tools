import { useContext } from "react";
import ItemsContext from "context/ItemsContext";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import styles from "../styles/Home.module.css";

export default function EditDeleteButtons({ index }) {
  const { setItem, items, setItems, setEditActive } = useContext(ItemsContext);
  const selectedItems = [...items];

  const handleEdit = (index) => {
    const itemToEdit = items[index];
    if (itemToEdit) {
      setItem("");
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
  };
  const handleDelete = (index) => {
    selectedItems.splice(index, 1);
    setItems(selectedItems);
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
