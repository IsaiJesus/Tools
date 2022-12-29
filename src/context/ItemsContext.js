import { createContext, useState } from "react";

const ItemsContext = createContext();

const initialStateItems = [];
const initialStateItem = {
  type: "",
  content: ""
};
const initialStateEdit = {
  index: null,
  text: ""
};

const ItemsProvider = ({ children }) => {
  //Array of items added
  const [items, setItems] = useState(initialStateItems);
  //onChange of inputs from form (data from form depending of type)
  const [item, setItem] = useState(initialStateItem);
  //select of topic (item to upload from select, Subtítulo, texto, código, etc)
  const [addItem, setAddItem] = useState("");
  //state to manipulate changes on edit button
  const [editActive, setEditActive] = useState(initialStateEdit);

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
        addItem,
        setAddItem,
        editActive,
        setEditActive,
        initialStateEdit
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export { ItemsProvider };

export default ItemsContext;