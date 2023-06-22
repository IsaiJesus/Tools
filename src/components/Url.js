import styles from "../styles/Home.module.css";

export default function Url({url, textUrl, compFrom}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={compFrom == "topic" ? styles.url: styles.urlItem}
    >{textUrl}</a>
  );
}
