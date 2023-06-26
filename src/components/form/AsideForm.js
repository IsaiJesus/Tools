import { useContext } from "react";
import FormHeaderContext from "context/FormHeaderContext";
import ItemsContext from "context/ItemsContext";
import Component from "Interface/Component";
import NewItem from "./NewItem";
import EditDeleteButtons from "./EditDeleteButtons";
import styles from "../../styles/Home.module.css";

export default function AsideForm() {
  const { formHeader } = useContext(FormHeaderContext);
  const { items, editActive } = useContext(ItemsContext);

  const component = Component;

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
                const Component = component[item.type];

                return (
                  <div key={index}>
                    <div className={styles.containerItem}>
                      {item.type == "image" ? (
                        <Component {...item} alt={formHeader.title} />
                      ) : (
                        <Component {...item} />
                      )}
                      <EditDeleteButtons index={index} />
                    </div>
                    {editActive.text === item.type &&
                      editActive.index === index && (
                        <NewItem
                          addItem={editActive.text}
                          editActive={editActive}
                        />
                      )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
