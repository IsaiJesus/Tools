import Head from "next/head";
import Error from "next/error";
import { useEffect, useState } from "react";
import OrderedTopics from "../../../helpers/GetOrderedTopics";
import ToolHeader from "../../../components/ToolHeader";
import TopicBox from "../../../components/TopicBox";
import Loader from "components/Loader";
import NotFound from "components/NotFound";
import styles from "../../../styles/Home.module.css";

export default function Tool({ tool, error }) {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const res = await fetch("https://your-tools.netlify.app/api/topics");
    const data = await res.json();
    setIsLoading(false);
    setTopics(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const orderedTopics = OrderedTopics(topics);

  if (error && error.statusCode)
    return <Error statusCode={error.statusCode} title={error.statusText} />;

  return (
    <main className={styles.containerMain}>
      <Head>
        <title>{tool.titleTool} - Tools</title>
      </Head>
      <div className={styles.toolContainer}>
        <div className={styles.toolBox}>
          <ToolHeader {...tool} />
          <div className={styles.topicsContainer}>
            {isLoading ? (
              <Loader />
            ) : topics.filter((topic) => tool.titleTool === topic.category)
                .length === 0 ? (
              <NotFound />
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
  const res = await fetch(`https://your-tools.netlify.app/api/tools/${id}`);
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
