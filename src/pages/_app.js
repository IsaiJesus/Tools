import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../store/index";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
        <meta
          name="description"
          content="Tools. Herramientas, recursos, tutoriales y consejos para mejorar tus habilidades en programación y tecnología."
        />
        <meta name="author" content="Isai Jesús" />
        <meta
          name="keywords"
          content="blog, programming, programacion, code, resources, recursos, tips, Isai Jesus"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
