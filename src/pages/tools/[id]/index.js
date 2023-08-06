import Head from "next/head";
import Error from "next/error";
import HOST_URL from "consts/Host";
import OrderedContent from "../../../helpers/GetOrderedContent";
import ToolHeader from "../../../components/ToolHeader";
import TopicBox from "../../../components/TopicBox";
import NotFound from "components/NotFound";
import styles from "../../../styles/Home.module.css";

export default function Tool({ tool, topics, error }) {
  const orderedTopics = OrderedContent(topics);

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
          <section className={styles.topicsContainer}>
            {topics.filter((topic) => tool.titleTool === topic.category)
              .length === 0 ? (
              <NotFound />
            ) : (
              orderedTopics
                .filter((topic) => tool.titleTool === topic.category)
                .map((topic) => <TopicBox key={topic._id} {...topic} />)
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps({ query: { id } }) {
  try {
    const resTool = await fetch(`${HOST_URL}/api/tools/${id}`);
    const resTopics = await fetch(`${HOST_URL}/api/topics`);

    const [tool, topics] = await Promise.all([
      resTool.json(),
      resTopics.json(),
    ]);

    return {
      props: {
        tool,
        topics,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        error: {
          statusCode: 500,
          statusText: "Internal Server Error",
        },
      },
    };
  }
}
