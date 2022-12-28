import styles from "../../styles/Home.module.css";

export default function ImageContent({ image }) {
  return <img src={image} alt="Content image" className={styles.imageItem} />;
}
