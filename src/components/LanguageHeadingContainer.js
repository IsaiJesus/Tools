import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "../styles/Home.module.css";

const textoDeEjemplo = "Final";

export default function LanguageHeadingContainer() {
  const [copied, setCopied] = useState(false);
  const deleteCopied = () => {
    setCopied(false);
  };
  const copyAlert = () => {
    setCopied(true);
    setInterval(deleteCopied, 3000);
  };

  return (
    <div className={styles.topCode}>
      <p>jsx</p>

      <CopyToClipboard text={textoDeEjemplo}>
        <button onClick={copyAlert}>{copied ? "Copied!" : "Copy"}</button>
      </CopyToClipboard>
    </div>
  );
}
