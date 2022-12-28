import { useContext } from "react";
import ItemsContext from "context/ItemsContext";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import styles from "../styles/Home.module.css";

export default function EditDeleteButtons({ index }) {
  const { items, setItems } = useContext(ItemsContext);

  const handleEdit = () => {
    alert("Editar");
  };
  const handleDelete = (index) => {
    const deletedItem = [...items];
    deletedItem.splice(index, 1);
    setItems(deletedItem);
    console.log(items);
  };

  return (
    <div className={styles.boxButtonsItem}>
      <button onClick={handleEdit} className={styles.buttonItem}>
        <FaPen />
      </button>
      <button onClick={() => handleDelete(index)} className={styles.buttonItem}>
        <FaTrashAlt />
      </button>
    </div>
  );
}
