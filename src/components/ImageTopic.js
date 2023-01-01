import styles from "../styles/Home.module.css";

export default function ImageDes({ image }) {
  return (
    <img
      src={image}
      alt="Imagen del tema"
      className={styles.image}
    />
  );
}
