import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <h2>Contact</h2>
      <div className={styles.mediaFooter}>
        <a
          href="https://github.com/isaijesus"
          target="_blank"
          rel="noreferrer"
          className="fab fa-github"
        ></a>
        <a
          href="https://www.instagram.com/isaijesus23/"
          target="_blank"
          rel="noreferrer"
          className="fab fa-instagram"
        ></a>
        <a
          href="https://twitter.com/isaijesus02"
          target="_blank"
          rel="noreferrer"
          className="fab fa-twitter"
        ></a>
        <a
          href="mailto:isaijesus02@gmail.com"
          className="fas fa-envelope"
        ></a>
      </div>
      <h3>Made by Isai Jesus. ❤️</h3>
    </footer>
  );
};

export default Footer;
