import Head from "next/head";
import Tool from "../components/Tool";
import styles from "../styles/Home.module.css";

export default function Home({ tools }) {
  return (
    <>
      <Head>
        <title>Tools</title>
        <meta
          name="description"
          content="Tools. Aprende de herramientas, recursos, códigos y otras cosas sobre tecnología."
        />
        <meta name="author" content="Isai Jesús" />
        <meta name="keywords" content="blog, programming, programacion, code, resources, recursos, tips"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
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

export const getServerSideProps = async () => {
  const res = await fetch("https://your-tools.netlify.app/api/tools");
  const tools = await res.json();

  return {
    props: {
      tools,
    },
  };
};
