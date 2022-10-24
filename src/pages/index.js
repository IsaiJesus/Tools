import Head from 'next/head'
import Tools from '../components/Tools'
import styles from '../styles/Home.module.css'

const data = [
  {
    id: 1,
    img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    title: "React JS",
    description: "Herramientas, links, exteniones, entre otras ayudas para entender React JS, sus hooks y algunas de sus librerías más usadas como React-Router."
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    title: "JavaScript",
    description: "Funciones y síntaxis de Javascript, uso con HTML, llamadas a API's, entre otras herramientas para aprender Javascript."
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
    title: "C++",
    description: "Síntaxis básica, ejemplos para aprender a programar con C++, y otras herramientas para aprender programación lógica y de algoritmos."
  },
  {
    id: 4,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    title: "HTML",
    description: "Concepto de HTML, funcionalidades de tags y buen manejo de CEO con una buena estructura de HTML."
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tools</title>
        <meta name="description" content="Tools by Isai Jesus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.containerMain}>
        <main className={styles.containerContent}>
          {
            data.map(tool => (
              <Tools key={tool.id} {...tool}/>
            ))
          }
        </main>
      </div>
    </div>
  )
}
