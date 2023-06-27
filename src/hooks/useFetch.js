import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [topics, setTopics] = useState([]);

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setTopics(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return { topics };
};

export default useFetch;