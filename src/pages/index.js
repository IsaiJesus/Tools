import Head from "next/head";
import Tool from "../components/Tool";
import OrderedContent from "helpers/GetOrderedContent";
import styles from "../styles/Home.module.css";

export default function Home({ tools }) {
  const orderedTools = OrderedContent(tools);

  return (
    <>
      <Head>
        <title>Tools</title>
      </Head>
      <div className={styles.containerMain}>
        <header className={styles.headerTitle}>
          <div className={styles.headerTitleText}>
            <h1>
              Encuentra lo que necesitas para convertirte en un experto en
              código
            </h1>
            <h2>
              Herramientas, recursos, tutoriales y consejos para mejorar tus
              habilidades en programación y tecnología.
            </h2>
          </div>
          <div className={styles.headerImg}>
            <img src="/img/tools.webp" alt="Avatar"/>
          </div>
        </header>
        <main className={styles.containerContent}>
          {orderedTools.map((tool) => (
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
