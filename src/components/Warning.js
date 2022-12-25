import { BsFillExclamationTriangleFill } from "react-icons/bs";
import styles from "../styles/Home.module.css";

export default function Warning() {
  return (
    <div className={styles.warning}>
      <BsFillExclamationTriangleFill size="20px" />
      <p>Elige una opción determinada</p>
    </div>
  );
}
