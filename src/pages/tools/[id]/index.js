import { useState, useEffect } from "react";
import Head from "next/head";
import Error from "next/error";
import OrderedTopics from '../../../helpers/GetOrderedTopics';
import ToolHeader from "../../../components/ToolHeader";
import TopicBox from "../../../components/TopicBox";
import styles from "../../../styles/Home.module.css";

export default function Tool({ tool, error }) {
  const [topics, setTopics] = useState([]);
  const orderedTopics = OrderedTopics(topics);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/topics");
    const data = await res.json();
    setTopics(data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (error && error.statusCode)
    return <Error statusCode={error.statusCode} title={error.statusText} />;

  return (
    <main className={styles.containerMain}>
      <Head>
        <title>{`${tool.titleTool} - Tools`}</title>
      </Head>
      <div className={styles.toolContainer}>
        <div className={styles.toolBox}>
          <ToolHeader {...tool} />
          <div className={styles.topicsContainer}>
            {topics.filter((topic) => tool.titleTool === topic.category)
              .length === 0 ? (
              <div className={styles.toolNotFound}>
                <h5>¡No existe contenido de esa herramienta aún!</h5>
              </div>
            ) : (
              orderedTopics
                .filter((topic) => tool.titleTool === topic.category)
                .map((topic) => <TopicBox key={topic._id} {...topic} />)
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`http://localhost:3000/api/tools/${id}`);
  if (res.status === 200) {
    const tool = await res.json();
    return {
      props: {
        tool,
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
