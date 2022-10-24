import styles from "../styles/Home.module.css";

export default function ToolHeader() {
  return (
    <div className={styles.toolHeader}>
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        alt="React JS"
        height={130}
        width={130}
      />
      <div className={styles.toolHeaderText}>
        <h1>React JS</h1>
        <p>
          Herramientas, links, exteniones, entre otras ayudas para entender
          React JS, sus hooks y algunas de sus librerías más usadas como
          React-Router-Dom.
        </p>
      </div>
    </div>
  );
}
