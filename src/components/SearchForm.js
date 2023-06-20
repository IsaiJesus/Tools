import { useContext, useRef, useState } from "react";
import SearchContext from "../context/SearchContext";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { BiSearch } from "react-icons/bi";
import useFetch from "hooks/useFetch";

const SearchForm = () => {
  const [change, setChange] = useState("");
  const { setSearch } = useContext(SearchContext);

  const { topics } = useFetch();

  const router = useRouter();
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(change);
    setChange("");
    inputRef.current.blur();
    router.push("/search");
  };

  const filteredTopics = topics.filter((topic) => {
    return topic.titleTopic.toLowerCase().includes(change.toLowerCase());
  });

  return (
    <div className={styles.containerSearchNav}>
      <form onSubmit={handleSearch} className={styles.searchNav}>
        <input
          type="text"
          placeholder="Buscar"
          ref={inputRef}
          onChange={(e) => setChange(e.target.value)}
          value={change}
        />
        <button>
          <BiSearch size="20px" />
        </button>
      </form>
      <ul className={filteredTopics.length === 0 || change === "" ? styles.containerSearchListOff : styles.containerSearchList}>
        {filteredTopics.map((topic) => (
          <li key={topic._id}>
            <a href={`http://localhost:3000/topics/${topic._id}`}>
              {topic.titleTopic}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchForm;
