import styles from "../styles/Home.module.css";

export default function ImageDes({altImage, image}) {
  return (
    <img
      src={image}
      alt={altImage}
      className={styles.image}
    />
  );
}
