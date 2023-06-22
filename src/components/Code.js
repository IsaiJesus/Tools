import Highlight, { defaultProps } from "prism-react-renderer";
import Prism from "prism-react-renderer/prism";
import LanguageHeadingContainer from "./LanguageHeadingContainer";
import theme from "prism-react-renderer/themes/vsDark";
import styles from "../styles/Home.module.css";
//vsDark
//nightOwl

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-java");
require("prismjs/components/prism-dart");
require("prismjs/components/prism-csharp");
require("prismjs/components/prism-swift");

const Code = ({ language, code, aside }) => {
  return (
    <>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={theme}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <div
            className={styles.codeContainer}
            style={
              aside ? { margin: "0 0 12px 0" } : { margin: "10px 0 12px 0" }
            }
          >
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
};

export default Code;