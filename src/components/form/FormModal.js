import { HiX } from "react-icons/hi";
import styles from "../../styles/Home.module.css";

const FormModal = ({ setModal, modal, handleSubmit }) => {
  return (
    <div
      onClick={() => setModal(false)}
      className={modal ? styles.containerModal : styles.closeContainerModal}
    >
      <div className={styles.modal}>
        <button className={styles.closeModal}>
          <HiX />
        </button>
        <p>
          ¿Estás seguro de que has revisado todo el contenido y estás listo para
          publicarlo?
        </p>
        <div>
          <button onClick={handleSubmit} className={styles.modalButtons}>
            Subir
          </button>
          <button
            onClick={() => setModal(false)}
            className={styles.modalButtons}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
