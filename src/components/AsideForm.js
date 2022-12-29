import { useContext, useState } from "react";
import FormContext from "context/FormContext";
import ItemsContext from "context/ItemsContext";
import styles from "../styles/Home.module.css";
import Subtitle from "./itemsAside/Subtitle";
import Text from "./itemsAside/Text";
import Code from "./Code";
import ImageContent from "./itemsAside/ImageContent";
import Link from "./itemsAside/Link";
import EditDeleteButtons from "./EditDeleteButtons";
import NewItem from "./NewItem";

export default function AsideForm() {
  const { form } = useContext(FormContext);
  const { items, editActive } = useContext(ItemsContext);

  return (
    <aside>
      <div className={styles.containerAside}>
        <h1>Preview</h1>
        <div className={styles.boxPreview}>
          {form.imageTool ? (
            <div className={styles.toolHeaderAside}>
              {form.imageTool && (
                <img
                  src={form.imageTool}
                  alt="Image Tool"
                  height={70}
                  width={70}
                />
              )}
              <div>
                <h2>{form.title}</h2>
                <p>{form.description}</p>
              </div>
            </div>
          ) : (
            <div
              className={
                form.title !== "" || form.description !== ""
                  ? styles.topicHeaderAside
                  : styles.boxHidden
              }
            >
              <h2>{form.title}</h2>
              <p>{form.description}</p>
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
                          <EditDeleteButtons
                            index={index}
                          />
                        </div>
                        {editActive.text === "subtitle" && editActive.index === index && (
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
                          <EditDeleteButtons
                            index={index}
                          />
                        </div>
                        {editActive.text === "text" && editActive.index === index && (
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
                          <Code {...item.content} />
                          <EditDeleteButtons
                            index={index}
                          />
                        </div>
                        {editActive.text === "code" && editActive.index === index && (
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
                          <ImageContent image={item.content} />
                          <EditDeleteButtons
                            index={index}
                          />
                        </div>
                        {editActive.text === "image" && editActive.index === index && (
                          <NewItem
                            addItem={editActive.text}
                            editActive={editActive}
                          />
                        )}
                      </div>
                    );
                  case "link":
                    return (
                      <div key={index}>
                        <div className={styles.containerItem}>
                          <Link {...item.content} />
                          <EditDeleteButtons
                            index={index}
                          />
                        </div>
                        {editActive.text === "link" && editActive.index === index && (
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
