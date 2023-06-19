import { store } from "../store";
import { Provider } from "react-redux";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <Navbar />
          {children}
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default Layout;
