import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useFetch from "hooks/useFetch";
import HOST_URL from "consts/Host";
import Filter from "helpers/Filter";
import { BiSearch } from "react-icons/bi";
import styles from "../../styles/Home.module.css";

const SearchForm = () => {
  const url = `${HOST_URL}api/articles`;
  const { articles } = useFetch(url);

  const [inputFocus, setInputFocus] = useState(false);
  const [change, setChange] = useState("");
  const router = useRouter();
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setChange("");
    inputRef.current.blur();
    router.push(`/search?query=${encodeURIComponent(change)}`);
  };

  const handleClick = () => {
    setChange("");
  }

  // funciones para manejar el focus del input y mostrar o no el contenido
  const setFocus = () => {
    setInputFocus(true);
  };
  const setBlur = () => {
    setTimeout(() => {
      setInputFocus(false);
    }, 120);
  };

  const filteredArticles = Filter(articles, change);

  return (
    <div className={styles.containerSearchNav}>
      <form onSubmit={handleSearch} className={styles.searchNav}>
        <input
          type="text"
          placeholder="Buscar"
          ref={inputRef}
          required
          onChange={(e) => setChange(e.target.value)}
          value={change}
          onFocus={setFocus}
          onBlur={setBlur}
        />
        <button>
          <BiSearch size="20px" />
        </button>
      </form>
      <ul
        className={
          filteredArticles.length === 0 || change === "" || !inputFocus
            ? styles.containerSearchListOff
            : styles.containerSearchList
        }
      >
        {filteredArticles
          .map((article) => (
            <li key={article._id}>
              <Link href={`/articles/${article.slug}`} >
                <a onClick={handleClick}>
                  {article.title}
                </a>
              </Link>
            </li>
          ))
          .slice(0, 10)}
      </ul>
    </div>
  );
};

export default SearchForm;