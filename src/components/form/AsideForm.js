import { useContext } from "react";
import FormInputsContext from "context/FormInputsContext";
import ArticleComponent from "components/layout/ArticleComponent";
import styles from "../../styles/Home.module.css";

export default function AsideForm() {
  const { formInputs } = useContext(FormInputsContext);

  return (
    <aside>
      <div className={styles.containerAside}>
        <h2>Article preview</h2>
        <div
          className={
            formInputs.title || formInputs.description != ""
              ? styles.headerPreview
              : { display: "none" }
          }
        >
          <h1>{formInputs.title}</h1>
          <p>{formInputs.description}</p>
        </div>
        <ArticleComponent markdown={formInputs.content} />
      </div>
    </aside>
  );
}
