import Error from "next/error";
import Head from "next/head";
import Code from "../../../components/Code";
import Link from "../../../components/Link";
import ImageTopic from "../../../components/ImageTopic";
import Subtitle from "../../../components/Subtitle";
import Text from "../../../components/Text";
import styles from "../../../styles/Home.module.css";

export default function Topic({ topic, error }) {
  const content = topic.content;

  if (error && error.statusCode)
    return <Error statusCode={error.statusCode} title={error.statusText} />;

  return (
    <main className={styles.containerMain}>
      <Head>
        <title>{topic.titleTopic} - Tools</title>
      </Head>
      <div className={styles.topicContainer}>
        <div className={styles.topicContainerCenter}>
          <div className={styles.topicHeader}>
            <h1>{topic.titleTopic}</h1>
            <p>{topic.descriptionTopic}</p>
          </div>
          <div className={styles.topicContent}>
            {
              content.map((content, index) => {
                switch(content.type){
                  case "subtitle":
                    return <Subtitle key={index} subtitle={content.content}/>
                  case "text":
                    return <Text key={index} text={content.content}/>
                  case "link":
                    return <Link key={index} {...content.content}/>
                  case "code":
                    return <Code key={index} {...content.content}/>
                  case "image":
                    return <ImageTopic key={index} image={content.content}/>
                }
              })
            }
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`http://localhost:3000/api/topics/${id}`);
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
