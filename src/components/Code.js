import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import styles from "../styles/Home.module.css";
import LanguageHeadingContainer from "./LanguageHeadingContainer";
//vsDark
//nightOwl

const exampleCode = `
const dynosAndFriends = ['🦖', '🦕', ['🦎', '🐊']]
const clone = structuredClone(dynosAndFriends)

// En el primer elemento del Array anidado ponemos una 🐓
clone[2][0] = '🐓' 

// En el clon está todo bien...
console.log(clone) // -> [ '🦖', '🦕', [ '🐓', '🐊' ] ]

// ¡Y el original sigue estando inalterado!
console.log(dynosAndFriends) // -> [ '🦖', '🦕', [ '🦎', '🐊' ] ]
`;

const Code = () => {
  return (
    <>
      <Highlight
        {...defaultProps}
        code={exampleCode}
        language="jsx"
        theme={theme}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <div className={styles.codeContainer}>
            <LanguageHeadingContainer/>
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
