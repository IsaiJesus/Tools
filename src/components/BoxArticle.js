import Link from "next/link";
import FormattedDate from "helpers/FormattedDate";
import styles from "../styles/Home.module.css";

export default function BoxArticle({
  slug,
  titleTopic,
  descriptionTopic,
  updatedAt,
}) {
  const formattedDate = FormattedDate(updatedAt);

  return (
    <Link href={`/topics/${slug}`}>
      <a className={styles.articleBox}>
        <div className={styles.articleBoxTitle}>
          <h3>{titleTopic}</h3>
          <img
            src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*5-aoK8IBmXve5whBQM90GA.png"
            alt=""
            width={30}
          />
        </div>
        <p className={styles.articleDescription}>{descriptionTopic}</p>
        <ul className={styles.articleBoxTags}>
          <li>web</li>
          <li>css</li>
          <li>javascript</li>
          <li>react</li>
        </ul>
        <p className={styles.articleDate}>{formattedDate}</p>
      </a>
    </Link>
  );
}
