import Head from "next/head";
import Error from "next/error";
import HOST_URL from "consts/Host";
import Component from "Interface/Component";
import styles from "../../../styles/Home.module.css";

export default function Topic({ topic, error }) {
  if (error && error.statusCode)
  return <Error statusCode={error.statusCode} title={error.statusText} />;
  
  const content = topic.content;

  const component = Component;

  return (
    <main className={styles.containerMain}>
      <Head>
        <title>{topic.titleTopic} - Tools</title>
      </Head>
      <article className={styles.topicContainer}>
        <div className={styles.topicContainerCenter}>
          <div className={styles.topicHeader}>
            <h1>{topic.titleTopic}</h1>
            <p>{topic.descriptionTopic}</p>
          </div>
          <div className={styles.topicContent}>
            {
              content.map((content, index) => {
                const Component = component[content.type];

                return content.type == "image" 
                  ? <Component key={index} {...content} alt={topic.titleTopic} compFrom={"topic"}/>
                  : <Component key={index} {...content} compFrom={"topic"}/>
              })
            }
          </div>
        </div>
      </article>
    </main>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`${HOST_URL}/api/topics/${id}`);
  if (res.status === 200) {
    const topic = await res.json();
    return {
      props: {
        topic,
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
