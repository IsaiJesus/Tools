import styles from "../styles/Home.module.css";

export default function Subtitle({text, compFrom}) {
  return (
    <p className={compFrom = "topic" ? styles.text : styles.textItem}>{text}</p>
  );
}
