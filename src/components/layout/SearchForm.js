import { useState, useRef } from "react";
import { useRouter } from "next/router";
import useFetch from "hooks/useFetch";
import Filter from "helpers/Filter";
import { BiSearch } from "react-icons/bi";
import styles from "../../styles/Home.module.css";

const SearchForm = () => {
  const [change, setChange] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { topics } = useFetch();
  const router = useRouter();
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setChange("");
    inputRef.current.blur();
    router.push(`/search?query=${encodeURIComponent(change)}`);
  };

  const filteredTopics = Filter(topics, change);

  return (
    <div className={styles.containerSearchNav}>
      <form onSubmit={handleSearch} className={styles.searchNav}>
        <input
          type="text"
          placeholder="Buscar"
          ref={inputRef}
          onChange={(e) => setChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={change}
        />
        <button>
          <BiSearch size="20px" />
        </button>
      </form>
      <ul
        className={
          filteredTopics.length === 0 || change === "" || !isFocused
            ? styles.containerSearchListOff
            : styles.containerSearchList
        }
      >
        {filteredTopics.map((topic) => (
          <li key={topic._id}>
            <a href={`https://your-tools.vercel.app/api/topics/${topic._id}`}>
              {topic.titleTopic}
            </a>
          </li>
        )).slice(0, 10)}
      </ul>
    </div>
  );
};

export default SearchForm;
