import styles from "../styles/Home.module.css";

export default function Subtitle({subtitle}) {
  return (
    <h2 className={styles.subtitle}>{subtitle}</h2>
  );
}
