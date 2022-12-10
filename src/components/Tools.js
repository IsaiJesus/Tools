import Link from "next/link";
import styles from "../styles/Home.module.css";

const Tools = ({ _id, imageTool, titleTool, descriptionTool }) => {
  return (
    <Link href={`/tools/${_id}`}>
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

export default Tools;
