import Image from "next/image";
import Link from "next/link";
import SearchForm from "./SearchForm";
import styles from "../../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.containerNav}>
      <Link href="/">
        <a>
          <Image src="/img/tools.webp" alt="Tools" width={70} height={70} />
        </a>
      </Link>
      <SearchForm />
      <a href="https://isaijesus.study" target="_blank" rel="noreferrer">
        <Image src="/img/avatar.webp" alt="Portfolio" width={70} height={70} />
      </a>
    </nav>
  );
};

export default Navbar;
