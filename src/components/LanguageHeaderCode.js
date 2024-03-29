import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "../styles/Home.module.css";

export default function LanguageHeaderCode({code, language}) {
  const [copied, setCopied] = useState(false);
  const deleteCopied = () => {
    setCopied(false);
  };
  const copyAlert = () => {
    setCopied(true);
    setInterval(deleteCopied, 3000);
  };

  return (
    <div className={styles.headCode}>
      <p>{language.toUpperCase() == 'CPP' ? 'C++' : language.toUpperCase()}</p>
      <CopyToClipboard text={code}>
        <button onClick={copyAlert}>{copied ? "¡Copiado!" : "Copiar"}</button>
      </CopyToClipboard>
    </div>
  );
}
