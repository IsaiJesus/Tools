import { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const data = { search, setSearch };

  return (
    <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
  );
};

export { SearchProvider };
export default SearchContext;
