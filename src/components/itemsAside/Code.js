import Highlight, { defaultProps } from "prism-react-renderer";
import Prism from "prism-react-renderer/prism";
import theme from "prism-react-renderer/themes/vsDark";
import LanguageHeadingContainer from "components/LanguageHeadingContainer";
import styles from '../../styles/Home.module.css';

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-java");

export default function Code({language, code}) {
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
}
