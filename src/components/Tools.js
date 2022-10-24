import Link from "next/link";
import styles from "../styles/Home.module.css";

const Tools = ({ img, title, description }) => {

  return (
    <Link href="/tools/tool">
      <a className={styles.tool}>
        <img src={img} alt={title} height={60} width={60} />
        <div className={styles.toolText}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Tools;
