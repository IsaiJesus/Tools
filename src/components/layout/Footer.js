import { FaGithub, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import styles from "../../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <h2>Contacto</h2>
      <div className={styles.mediaFooter}>
        <a href="https://github.com/isaijesus" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/isaijesus23/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/isaijesus02"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a href="mailto:isaijesus02@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <h3>Hecho por Isai Jesús</h3>
    </footer>
  );
};

export default Footer;