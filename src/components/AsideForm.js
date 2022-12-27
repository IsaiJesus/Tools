import { useContext } from "react";
import FormContext from "context/FormContext";
import ItemsContext from "context/ItemsContext";
import styles from "../styles/Home.module.css";
import Subtitle from "./itemsAside/Subtitle";
import Text from "./itemsAside/Text";
import Code from "./itemsAside/Code";
import ImageContent from "./itemsAside/ImageContent";
import Link from "./itemsAside/Link";
import EditDeleteButtons from "./EditDeleteButtons";

const code = `export default function Code({language, code}) {
  return (
    <>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={theme}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <div className={styles.codeContainer}>
            <LanguageHeadingContainer code={code} language={language} />
            <pre className={styles.code} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    </>
  );
}`;

export default function AsideForm() {
  const { form } = useContext(FormContext);
  const { items } = useContext(ItemsContext);

  return (
    <aside>
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
                    <div key={index} className={styles.containerItem}>
                      <Subtitle subtitle={item.content} />
                      <EditDeleteButtons />
                    </div>
                  );
                case "text":
                  return (
                    <div key={index} className={styles.containerItem}>
                      <Text text={item.content} />
                      <EditDeleteButtons />
                    </div>
                  );
                case "code":
                  return (
                    <div key={index} className={styles.containerItem}>
                      <Code {...item.content} />
                      <EditDeleteButtons />
                    </div>
                  );
                case "image":
                  return (
                    <div key={index} className={styles.containerItem}>
                      <ImageContent image={item.content} />
                      <EditDeleteButtons />
                    </div>
                  );
                case "link":
                  return (
                    <div key={index} className={styles.containerItem}>
                      <Link {...item.content} />
                      <EditDeleteButtons />
                    </div>
                  );
              }
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
