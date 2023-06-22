import { Provider } from "react-redux";
import { store } from "../store/index";
import { SearchProvider } from "context/SearchContext";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SearchProvider>
  );
}

export default MyApp;
