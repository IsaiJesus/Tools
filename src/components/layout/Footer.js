import { FaGithub, FaLinkedin, FaEnvelope, FaStar } from "react-icons/fa";
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
          href="https://www.linkedin.com/in/isai-jesus-tapia/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:isaijesus02@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <a
        href="https://github.com/IsaiJesus/Tools"
        target="_blank"
        rel="noreferrer"
        className={styles.star}
      >
        <p>Dame una estrella</p> <FaStar/>
      </a>
    </footer>
  );
};

export default Footer;
