import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.containerNav}>
      <Link href="/">
        <a>
          <Image src="/img/tools.png" alt="Tools" width={70} height={70} />
          <h1 className={styles.letterLogo}>Tools</h1>
        </a>
      </Link>
      <div className={styles.searchNav}>
        <input type="text" placeholder="Buscar" />
        <button className="fas fa-search"></button>
      </div>
      <a href="https://isaijesus.netlify.app/" target="_blank" rel="noreferrer">
        <Image src="/img/aztec.png" alt="Portfolio" width={70} height={70} />
        <h1 className={styles.letterLogo}>Portfolio</h1>
      </a>
    </nav>
  );
};

export default Navbar;
