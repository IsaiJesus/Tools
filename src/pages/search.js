import Head from "next/head";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import useFetch from "hooks/useFetch";
import SearchContext from "context/SearchContext";
import TopicBox from "components/TopicBox";
import styles from "../styles/Home.module.css";

function Search() {
  const { search } = useContext(SearchContext);
  const { topics } = useFetch();
  const router = useRouter();

  useEffect(() => {
    if (search === "") {
      router.back();
    }
  }, [router, search]);

  const filteredTopics = topics.filter((topics) => {
    return (
      topics.titleTopic.toLowerCase().includes(search.toLowerCase()) ||
      topics.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className={styles.toolContainer}>
      <Head>
        <title>Search results: {search}</title>
      </Head>
      <div className={styles.toolBox}>
        <div className={styles.searchHeader}>
          <h1>Resultados de la búsqueda:</h1>
          <p>{search}</p>
        </div>
        <div className={styles.topicsContainer}>
          {filteredTopics.length === 0 || search === "" ? (
            <h1 className={styles.notFound}>¡No se han encontrado resultados!</h1>
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
