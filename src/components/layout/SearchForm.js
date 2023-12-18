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
        />
        <button>
          <BiSearch size="20px" />
        </button>
      </form>
      <ul
        className={
          filteredArticles.length === 0 || change === ""
            ? styles.containerSearchListOff
            : styles.containerSearchList
        }
      >
        {filteredArticles
          .map((article) => (
            <li key={article._id}>
              <Link href={`/article/${article.slug}`} >
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
/*
export const getServerSideProps = async () => {
  const res = await fetch(`${HOST_URL}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};*/