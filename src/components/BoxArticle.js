import Link from "next/link";
import FormattedDate from "helpers/FormattedDate";
import styles from "../styles/Home.module.css";

export default function BoxArticle({
  slug,
  title,
  description,
  img,
  updatedAt,
}) {
  const formattedDate = FormattedDate(updatedAt);

  return (
    <Link href={`/articles/${slug}`}>
      <a className={styles.boxArticle}>
        <div className={styles.boxArticleTitle}>
          <h3>{title}</h3>
          <img
            src={img}
            alt={title}
            height={30}
          />
        </div>
        <p className={styles.boxArticleDescription}>{description}</p>
        <p className={styles.boxDateArticle}>{formattedDate}</p>
      </a>
    </Link>
  );
}
