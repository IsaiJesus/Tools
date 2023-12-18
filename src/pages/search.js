import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import HOST_URL from "consts/Host";
import Section from "components/layout/Section";
import styles from "../styles/Home.module.css";

function Search({ articles }) {
  const router = useRouter();
  const query = router.query.query;

  useEffect(() => {
    if (query === "") {
      router.back();
    }
  }, [query, router]);

  return (
    <>
      <Head>
        <title>Resultados de la búsqueda: {query}</title>
      </Head>
      <div className={styles.containerMain}>
        <Section titleHeader={"Resultados de la búsqueda: \"" + query+ "\""} articles={articles}/>
      </div>
    </>
  );
}

export default Search;

export async function getServerSideProps({ query: { query } }) {
  const res = await fetch(`${HOST_URL}/api/search?query=${query}`);
  if (res.status === 200) {
    const articles = await res.json();
    return {
      props: {
        articles,
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
