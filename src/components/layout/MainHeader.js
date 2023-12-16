import styles from "../../styles/Home.module.css";

export default function MainHeader() {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.mainHeaderText}>
        <h1>
          Encuentra lo que necesitas para convertirte en un experto en código
        </h1>
        <h2>
          Herramientas, recursos y consejos para mejorar tus
          habilidades en programación y tecnología.
        </h2>
      </div>
      <div className={styles.mainHeaderImg}>
        <img src="/img/tools.webp" alt="Avatar" />
      </div>
    </header>
  );
}
