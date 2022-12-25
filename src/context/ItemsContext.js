import { createContext, useState } from "react";

const ItemsContext = createContext();

const initialState = [];

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(initialState);
  const [item, setItem] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    if (name === "link" || name === "code" || name === "textLink" || name === "language") {
      setItem({
        ...item,
        type: name,
        content: { ...item.content, [name]: value },
      });
    }else{
      setItem({ ...item, type: name, content: value });
    }
  };

  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems,
        item,
        setItem,
        handleChange,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export { ItemsProvider };

export default ItemsContext;
