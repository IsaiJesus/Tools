import Head from "next/head";
import HOST_URL from "consts/Host";
import OrderedContent from "helpers/GetOrderedContent";
import styles from "../styles/Home.module.css";
import MainHeader from "components/layout/MainHeader";
import Section from "components/layout/Section";

export default function Home({ topics, error }) {
  const orderedTopics = OrderedContent(topics);

  if (error && error.statusCode)
    return <Error statusCode={error.statusCode} title={error.statusText} />;

  return (
    <>
      <Head>
        <title>Tools</title>
      </Head>
      <div className={styles.containerMain}>
        <MainHeader />
        <Section titleHeader="Artículos" articles={orderedTopics}/>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${HOST_URL}/api/topics`);
  const topics = await res.json();

  return {
    props: {
      topics,
    },
  };
};
