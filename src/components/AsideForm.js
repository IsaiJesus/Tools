import { useContext } from "react";
import styles from "../styles/Home.module.css";
import FormContext from "context/FormContext";
import ItemsContext from "context/ItemsContext";
import Text from '../components/Text';

export default function AsideForm() {
  const { form } = useContext(FormContext);
  const { items } = useContext(ItemsContext);

  return (
    <aside>
      <h1>Preview</h1>
      <h3>{form.title}</h3>
      <p>{form.description}</p>
      {form.imageTool !== "" && (
        <img src={form.imageTool} alt="Image Tool" width={80} />
      )}
      <h2>Items:</h2>
      {
        items.map((item, index) => {
          switch(item.type){
            case "subtitle":
              return <p key={index}>{item.content}</p>
            case "text":
              return <Text key={index} text={item.content}/>
            case "code":
              return <p key={index}>{item.content.code}</p>
            case "image":
              return <p key={index}>{item.content}</p>
            case "link":
              return <p key={index}>{item.content.textLink}</p>
          }
        })
      } 
    </aside>
  );
}