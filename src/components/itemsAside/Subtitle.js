import styles from "../../styles/Home.module.css";

export default function Subtitle({subtitle}) {
  return (
    <h3 className={styles.subtitleItem}>{subtitle}</h3>
  )
}
