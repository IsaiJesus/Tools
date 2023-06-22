import { useContext } from "react";
import FormHeaderContext from "context/FormHeaderContext";
import ItemsContext from "context/ItemsContext";
import Subtitle from "../Subtitle";
import Text from "../Text";
import Code from "../Code";
import ImageTopic from "../ImageTopic";
import Url from "../Url";
import NewItem from "./NewItem";
import EditDeleteButtons from "./EditDeleteButtons";
import styles from "../../styles/Home.module.css";

export default function AsideForm() {
  const { formHeader } = useContext(FormHeaderContext);
  const { items, editActive } = useContext(ItemsContext);

  return (
    <aside>
      <div className={styles.containerAside}>
        <h1>Preview</h1>
        <div className={styles.boxPreview}>
          {formHeader.imageTool ? (
            <div className={styles.toolHeaderAside}>
              {formHeader.imageTool && (
                <img
                  src={formHeader.imageTool}
                  alt="Image Tool"
                  height={70}
                  width={70}
                />
              )}
              <div>
                <h2>{formHeader.title}</h2>
                <p>{formHeader.description}</p>
              </div>
            </div>
          ) : (
            <div
              className={
                formHeader.title !== "" || formHeader.description !== ""
                  ? styles.topicHeaderAside
                  : styles.boxHidden
              }
            >
              <h2>{formHeader.title}</h2>
              <p>{formHeader.description}</p>
            </div>
          )}
          {items.length !== 0 && (
            <div className={styles.topicContentAside}>
              {items.map((item, index) => {
                switch (item.type) {
                  case "subtitle":
                    return (
                      <div key={index}>
                        <div className={styles.containerItem}>
                          <Subtitle subtitle={item.content} />
                          <EditDeleteButtons index={index} />
                        </div>
                        {editActive.text === "subtitle" &&
                          editActive.index === index && (
                            <NewItem
                              addItem={editActive.text}
                              editActive={editActive}
                            />
                          )}
                      </div>
                    );
                  case "text":
                    return (
                      <div key={index}>
                        <div className={styles.containerItem}>
                          <Text text={item.content} />
                          <EditDeleteButtons index={index} />
                        </div>
                        {editActive.text === "text" &&
                          editActive.index === index && (
                            <NewItem
                              addItem={editActive.text}
                              editActive={editActive}
                            />
                          )}
                      </div>
                    );
                  case "code":
                    return (
                      <div key={index}>
                        <div className={styles.containerItem}>
                          <Code {...item.content} aside={true} />
                          <EditDeleteButtons index={index} />
                        </div>
                        {editActive.text === "code" &&
                          editActive.index === index && (
                            <NewItem
                              addItem={editActive.text}
                              editActive={editActive}
                            />
                          )}
                      </div>
                    );
                  case "image":
                    return (
                      <div key={index}>
                        <div className={styles.containerItem}>
                          <ImageTopic
                            image={item.content}
                            alt={formHeader.title}
                          />
                          <EditDeleteButtons index={index} />
                        </div>
                        {editActive.text === "image" &&
                          editActive.index === index && (
                            <NewItem
                              addItem={editActive.text}
                              editActive={editActive}
                            />
                          )}
                      </div>
                    );
                  case "url":
                    return (
                      <div key={index}>
                        <div className={styles.containerItem}>
                          <Url {...item.content} />
                          <EditDeleteButtons index={index} />
                        </div>
                        {editActive.text === "url" &&
                          editActive.index === index && (
                            <NewItem
                              addItem={editActive.text}
                              editActive={editActive}
                            />
                          )}
                      </div>
                    );
                }
              })}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}