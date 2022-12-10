import styles from "../styles/Home.module.css";
import { BiSearch } from "react-icons/bi";

const SearchForm = () => {
  return (
    <form className={styles.searchNav}>
      <input type="text" placeholder="Buscar" />
      <button>
        <BiSearch
          size="20px"
        />
      </button>
    </form>
  );
};

export default SearchForm;
