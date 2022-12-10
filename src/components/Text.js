import styles from "../styles/Home.module.css";

export default function Subtitle({text}) {
  return (
    <p className={styles.text}>{text}</p>
  );
}
