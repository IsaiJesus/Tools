import styles from "../../styles/Home.module.css";

export default function Text({text}) {
  return (
    <p className={styles.textItem}>{text}</p>
  )
}