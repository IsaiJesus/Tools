import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Filter from "helpers/Filter";
import TopicBox from "components/TopicBox";
import styles from "../styles/Home.module.css";

function Search({ topics }) {
  const router = useRouter();
  const query = router.query.query;

  useEffect(() => {
    if (query === "") {
      router.back();
    }
  }, [query, router]);

  const filteredTopics = Filter(topics, query);

  return (
    <div className={styles.toolContainer}>
      <Head>
        <title>Resultados de la búsqueda: {query}</title>
      </Head>
      <div className={styles.toolBox}>
        <div className={styles.searchHeader}>
          <h1>Resultados de la búsqueda:</h1>
          <p>{query}</p>
        </div>
        <div className={styles.topicsContainer}>
          {filteredTopics.length === 0 || query === "" ? (
            <h1 className={styles.notFound}>
              ¡No se han encontrado resultados!
            </h1>
          ) : (
            filteredTopics.map((topic) => (
              <TopicBox key={topic._id} {...topic} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.HOST_URL}/api/topics`);
  const topics = await res.json();

  return {
    props: {
      topics,
    },
  };
};
