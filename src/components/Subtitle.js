import styles from "../styles/Home.module.css";

/*this way to get props is because I wanted to save lines of code in files 
  "pages/topics/[id]/index.js" and "componente/form/AsideForm.js"*/
export default function Subtitle({ content, compFrom }) {
  return (
    <h2 className={compFrom == "topic" ? styles.subtitle : styles.subtitleItem}>
      {content}
    </h2>
  );
}
