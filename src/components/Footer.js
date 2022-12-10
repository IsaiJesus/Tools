import styles from "../styles/Home.module.css";
import { FaGithub, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <h2>Contact</h2>
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
      <h3>Made by Isai Jesus. ❤️</h3>
    </footer>
  );
};

export default Footer;
