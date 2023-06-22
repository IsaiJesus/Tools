import styles from "../styles/Home.module.css";

export default function Subtitle({ subtitle, compFrom }) {
  return (
    <h2 className={compFrom == "topic" ? styles.subtitle : styles.subtitleItem}>
      {subtitle}
    </h2>
  );
}
