import Head from "next/head";
import Error from "next/error";
import HOST_URL from "consts/Host";
import ArticleComponent from "components/layout/ArticleComponent";
import FormattedDate from "helpers/FormattedDate";
import styles from "../../../styles/Home.module.css";

export default function Article({ article, error }) {

  const formattedDate = FormattedDate(article.updatedAt);

  if (error && error.statusCode)
    return <Error statusCode={error.statusCode} title={error.statusText} />;

  return (
    <>
      <Head>
        <title>{article.title} - Tools</title>
      </Head>
      <div className={styles.containerMain}>
        <article className={styles.containerArticle}>
          <div className={styles.mainArticle}>
            <div className={styles.headerArticle}>
              <h1>{article.title}</h1>
              <p className={styles.headerArticleDescription}>
                {article.description}
              </p>
              <p className={styles.headerArticleDate}>{formattedDate}</p>
            </div>
            <div className={styles.contentArticle}>
              <ArticleComponent markdown={article.content} />
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${HOST_URL}/api/articles/${id}`);
  if (res.status === 200) {
    const article = await res.json();
    return {
      props: {
        article,
      },
    };
  }

  return {
    props: {
      error: {
        statusCode: res.status,
        statusText: "Invalid Id",
      },
    },
  };
}
