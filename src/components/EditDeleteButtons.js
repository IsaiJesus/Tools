import { FaPen, FaTrashAlt } from "react-icons/fa";
import styles from "../styles/Home.module.css";

export default function EditDeleteButtons() {
  return (
    <div className={styles.boxButtonsItem}>
      <button className={styles.buttonItem}>
        <FaPen />
      </button>
      <button className={styles.buttonItem}>
        <FaTrashAlt />
      </button>
    </div>
  );
}
