import Head from "next/head";
import Tool from "../components/Tool";
import styles from "../styles/Home.module.css";

export default function Home({ tools }) {
  return (
    <>
      <Head>
        <title>Tools</title>
        <meta name="description" content="Tools by Isai Jesus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.containerMain}>
        <main className={styles.containerContent}>
          {tools.map((tool) => (
            <Tool key={tool._id} {...tool} />
          ))}
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch("https://your-tools.netlify.app/api/tools");
  const tools = await res.json();

  return {
    props: {
      tools,
    },
  };
};
