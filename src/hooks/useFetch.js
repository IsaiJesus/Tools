import { useState, useEffect } from "react";

const useFetch = () => {
  const [topics, setTopics] = useState([]);

  const getData = async () => {
    const res = await fetch("https://your-tools.vercel.app/api/topics");
    const data = await res.json();
    setTopics(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return { topics };
};

export default useFetch;
