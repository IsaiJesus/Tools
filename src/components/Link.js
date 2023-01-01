import styles from "../styles/Home.module.css";

export default function Link({link, textLink}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles.link}
    >{textLink}</a>
  );
}
