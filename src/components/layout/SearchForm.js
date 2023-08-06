import { useState, useRef } from "react";
import { useRouter } from "next/router";
import useFetch from "hooks/useFetch";
import Filter from "helpers/Filter";
import { BiSearch } from "react-icons/bi";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const SearchForm = () => {
  const url = "https://your-tools.netlify.app/api/topics";
  const { topics } = useFetch(url);

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

  const filteredTopics = Filter(topics, change);

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
          filteredTopics.length === 0 || change === ""
            ? styles.containerSearchListOff
            : styles.containerSearchList
        }
      >
        {filteredTopics
          .map((topic) => (
            <li key={topic._id}>
              <Link href={`/topics/${topic.slug}`} >
                <a onClick={handleClick}>
                  {topic.titleTopic}
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

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.HOST_URL}/api/topics`);
  const topics = await res.json();

  return {
    props: {
      topics,
    },
  };
};