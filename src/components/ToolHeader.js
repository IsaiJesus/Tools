import styles from "../styles/Home.module.css";

export default function ToolHeader({imageTool, titleTool, descriptionTool}) {
  return (
    <div className={styles.toolHeader}>
      <img
        src={imageTool}
        alt={titleTool}
        height={130}
        width={130}
      />
      <div className={styles.toolHeaderText}>
        <h1>{titleTool}</h1>
        <p>{descriptionTool}</p>
      </div>
    </div>
  );
}
