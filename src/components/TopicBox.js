import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function TopicBox() {
  return (
    <Link href="/topics/topic">
      <a className={styles.topicBox}>
        <h4>Hooks de React JS</h4>
        <p>
          Ejemplo de texto de descripción del contenido que va por debajo del
          contenido. Aquí iría lo que tendría el contenido por ejemplo de los
          hooks.
        </p>
      </a>
    </Link>
  );
}
