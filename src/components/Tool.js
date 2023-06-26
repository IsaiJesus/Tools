import Link from "next/link";
import styles from "../styles/Home.module.css";

const Tool = ({ slug, imageTool, titleTool, descriptionTool }) => {
  return (
    <Link href={`/tools/${slug}`}>
      <a className={styles.tool}>
        <img src={imageTool} alt={titleTool} height={60} width={60} />
        <div className={styles.toolText}>
          <h3>{titleTool}</h3>
          <p>{descriptionTool}</p>
        </div>
      </a>
    </Link>
  );
};

export default Tool;
