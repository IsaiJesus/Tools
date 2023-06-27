import Link from "next/link";
import FormattedDate from "helpers/FormattedDate";
import styles from "../styles/Home.module.css";

export default function TopicBox({
  slug,
  titleTopic,
  descriptionTopic,
  updatedAt,
}) {
  const formattedDate = FormattedDate(updatedAt);

  return (
    <Link href={`/topics/${slug}`} className={styles.topicBox}>
      <h4>{titleTopic}</h4>
      <p className={styles.descriptionOfTopic}>{descriptionTopic}</p>
      <p className={styles.dateOfTopic}>{formattedDate}</p>
    </Link>
  );
}
