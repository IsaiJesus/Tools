import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function TopicBox({_id, titleTopic, descriptionTopic, updatedAt}) {

  //Sorts the items by date
  const date = new Date(updatedAt);
  const formattedDate = date.toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Link href={`/topics/${_id}`}>
      <a className={styles.topicBox}>
        <h4>{titleTopic}</h4>
        <p className={styles.descriptionOfTopic}>{descriptionTopic}</p>
        <p className={styles.dateOfTopic}>{formattedDate}</p>
      </a>
    </Link>
  );
}
