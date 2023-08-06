import styles from "../styles/Home.module.css";

/*this way to get props is because I wanted to save lines of code in files 
  "pages/topics/[id]/index.js" and "componente/form/AsideForm.js" using the same component*/
export default function Subtitle({content, compFrom}) {
  return (
    <p className={compFrom == "topic" ? styles.text : styles.textItem}>{content}</p>
  );
}
