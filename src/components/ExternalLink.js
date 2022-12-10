import styles from "../styles/Home.module.css";

export default function ExternalLink({link, text}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles.link}
    >{text}</a>
  );
}
