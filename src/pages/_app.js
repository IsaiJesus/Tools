import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../store/index";
import "../styles/globals.css";
import { SearchProvider } from "context/SearchContext";

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
