import Link from "next/link";
import styles from "../styles/Home.module.css";

const Tool = ({ slug, imageTool, titleTool, descriptionTool }) => {
  return (
    <Link href={`/tools/${slug}`} className={styles.tool}>
      <img src={imageTool} alt={titleTool} height={60} width={60} />
      <div className={styles.toolText}>
        <h3>{titleTool}</h3>
        <p>{descriptionTool}</p>
      </div>
    </Link>
  );
};

export default Tool;
