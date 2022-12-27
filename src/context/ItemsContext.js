import { createContext, useState } from "react";

const ItemsContext = createContext();

const initialStateItems = [];

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(initialStateItems);
  const [item, setItem] = useState({
    type: "",
    content: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    const typeName = name;
    if (name === "link" || name === "code" || name === "textLink" || name === "language") {
      if(name === "textLink"){
        typeName = "link";
      }
      if(name === "language"){
        typeName = "code";
      }
      setItem({
        ...item,
        type: typeName,
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
