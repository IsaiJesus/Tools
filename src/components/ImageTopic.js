import styles from "../styles/Home.module.css";

/*this way to get props is because I wanted to save lines of code in files 
  "pages/topics/[id]/index.js" and "componente/form/AsideForm.js"*/
export default function ImageDes({ content, alt, compFrom }) {
  return (
    <img
      src={content}
      alt={alt}
      className={compFrom == "topic" ? styles.image : styles.imageItem}
    />
  );
}
