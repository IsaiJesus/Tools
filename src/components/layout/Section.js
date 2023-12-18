import BoxArticle from "components/BoxArticle";
import styles from "../../styles/Home.module.css";

export default function Section({ titleHeader, articles }) {

  return (
    <div className={styles.containerSection}>
      <div className={styles.boxSection}>
        <div className={styles.titleSection}>
          <h2>{titleHeader}</h2>
        </div>
        <section className={styles.containerArticles}>
          {articles.length === 0 ? (
            <h1 className={styles.notFound}>
              ¡No existe contenido!
            </h1>
          ) : (
            articles.map((article) => (
              <BoxArticle key={article._id} {...article} />
            ))
          )}
        </section>
      </div>
    </div>
  );
}
