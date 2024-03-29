import Head from "next/head";
import Error from "next/error";
import HOST_URL from "consts/Host";
import OrderedContent from "helpers/GetOrderedContent";
import MainHeader from "components/layout/MainHeader";
import Section from "components/layout/Section";
import styles from "../styles/Home.module.css";

export default function Home({ articles, error }) {
  const orderedArticles = OrderedContent(articles);

  if (error && error.statusCode)
    return <Error statusCode={error.statusCode} title={error.statusText} />;

  return (
    <>
      <Head>
        <title>Tools</title>
      </Head>
      <div className={styles.containerMain}>
        <MainHeader />
        <Section titleHeader="Artículos" articles={orderedArticles} />
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${HOST_URL}/api/articles`);
  const articles = await res.json();

  if (res.status === 200) {
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
};
