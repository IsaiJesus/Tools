import styles from "../styles/Home.module.css";

/*this way to get props is because I wanted to save lines of code in files 
  "pages/topics/[id]/index.js" and "componente/form/AsideForm.js"*/
export default function Url({content, compFrom}) {
  return (
    <a
      href={content.url}
      target="_blank"
      rel="noreferrer"
      className={compFrom == "topic" ? styles.url: styles.urlItem}
    >{content.textUrl}</a>
  );
}
