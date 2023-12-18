import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import HOST_URL from "consts/Host";
import Section from "components/layout/Section";
import Filter from "helpers/Filter";
import styles from "../styles/Home.module.css";

function Search({ articles }) {
  const router = useRouter();
  const query = router.query.query;

  useEffect(() => {
    if (query === "") {
      router.back();
    }
  }, [query, router]);

  const filteredArticles = Filter(articles, query);

  return (
    <>
      <Head>
        <title>Resultados de la búsqueda: {query}</title>
      </Head>
      <div className={styles.containerMain}>
        <Section titleHeader={"Resultados de la búsqueda: \"" + query+ "\""} articles={filteredArticles}/>
      </div>
    </>
  );
}

export default Search;

export const getServerSideProps = async () => {
  const res = await fetch(`${HOST_URL}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
