import styles from "../styles/Home.module.css";

export default function Subtitle() {
  return (
    <p className={styles.text}>
      En JavaScript existen los tipos de datos primitivos (String, Boolean, Number, null...) y los Object (objetos, array, maps, sets…).

Los datos primitivos son inmutables. No puedes cambiarle el valor al string Hola mundo. Si quieres modificarlo, tienes que crear uno nuevo a partir de otro.

En cambio, las estructuras de datos basadas en Object son mutables. Puedes cambiar el valor de estas referencias. Por ejemplo:
    </p>
  );
}
