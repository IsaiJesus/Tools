import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setArticles(data);
  };

  useEffect(() => {
    getData();
  },);
  
  return { articles };
};

export default useFetch;