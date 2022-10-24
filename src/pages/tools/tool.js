import Head from "next/head";
import Code from "../../components/Code";
import ToolHeader from "../../components/ToolHeader";
import TopicBox from "../../components/TopicBox";
import styles from "../../styles/Home.module.css";

export default function Tool() {
  return (
    <main className={styles.containerMain}>
      <Head>
        <title>Tool - Tools</title>
      </Head>
      <div>
        <ToolHeader />
        <div className={styles.topicsContainer}>
          <TopicBox />
          <TopicBox />
          <TopicBox />
        </div>
      </div>
    </main>
  );
}
