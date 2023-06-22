import styles from "../styles/Home.module.css";

export default function ImageDes({ image, alt, compFrom }) {
  return (
    <img
      src={image}
      alt={alt}
      className={compFrom == "topic" ? styles.image : styles.imageItem}
    />
  );
}
