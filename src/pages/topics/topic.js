import Head from "next/head";
import Code from "../../components/Code";
import ExternalLink from "../../components/ExternalLink";
import ImageDes from "../../components/ImageDes";
import Subtitle from "../../components/Subtitle";
import Text from '../../components/Text';
import styles from "../../styles/Home.module.css";

export default function topic() {
  return (
    <div className={styles.containerMain}>
      <Head>
        <title>Topic - Tools</title>
      </Head>
      <div className={styles.topicContainer}>
        <div className={styles.topicContainerCenter}>
          <div className={styles.topicHeader}>
            <h1>Cómo clonar un Array en JavaScript de forma correcta y sin problemas</h1>
            <p>Cuando tienes que hacer una copia de un Array en JavaScript tienes que tener bastantes cosas en cuenta para evitar tener problemas. Si quieres descubrir por qué no puedes usar la asignación, cómo hacer copias superficiales y copias profundas de Array, entonces sigue leyendo. 👇</p>
          </div>
          <div className={styles.topicContent}>
            <Subtitle/>
            <Text/>
            <Code/>
            <ExternalLink/>
            <Subtitle/>
            <Text/>
            <ImageDes/>
            <Code />
            <Text/>
          </div>
        </div>
      </div>
    </div>
  );
}
