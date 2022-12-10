import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function TopicBox({_id, titleTopic, descriptionTopic}) {
  return (
    <Link href={`/topics/${_id}`}>
      <a className={styles.topicBox}>
        <h4>{titleTopic}</h4>
        <p>{descriptionTopic}</p>
      </a>
    </Link>
  );
}
