import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTop}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
