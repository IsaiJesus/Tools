import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import styles from "../styles/Home.module.css";
import Code from "components/Code";

const extractCodeInfo = (value) => {
  const match = /language-(\w+)/.exec(value);
  return match ? { language: match[1], code: value.slice(match[0].length).trim() } : { code: value.trim() };
};

const blockquote = `> A block quote`;
const markdownTable = `
| S/N | Pet | Image |
|--|--|--|
| 1 | Cat |![A cat looking at you](https://s1.eestatic.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg) |
| 2 | Dog |![A dog looking at you](https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg)|
`;

const table = `| Usuario  | Nombre          | Correo Electrónico        | Dirección                   | Teléfono     | Última Compra | Total Gastado | Preferencias    | Estado de Cuenta | Fecha Registro  |
|--|--|--|--|--|--|--|--|--|--|
| Usuario1 | Juan Pérez      | juan@email.com           | Calle A, Ciudad B           | 555-123-4567 | 2023-01-15     | $350          | Moda, Electrónica | Activo            | 2022-12-01      |
| Usuario2 | María González  | maria@email.com          | Av. Principal, Pueblo C     | 555-987-6543 | 2023-02-02     | $200          | Deportes, Hogar  | Inactivo         | 2023-01-10      |
| Usuario3 | Carlos Ramírez  | carlos@email.com         | Calle X, Ciudad Y           | 555-555-5555 | 2023-03-10     | $500          | Tecnología       | Activo            | 2023-02-20      |
| Usuario4 | Ana López       | ana@email.com            | Calle Z, Ciudad W           | 555-111-2222 | 2023-04-05     | $150          | Belleza, Libros  | Inactivo         | 2023-03-05      |
| Usuario5 | Pablo Martínez  | pablo@email.com          | Av. Secundaria, Pueblo D    | 555-333-4444 | 2023-05-20     | $300          | Viajes, Moda     | Activo            | 2023-04-15      |
| Usuario6 | Laura Sánchez   | laura@email.com          | Calle Y, Ciudad Z           | 555-666-7777 | 2023-06-12     | $450          | Hogar, Electrónica| Inactivo         | 2023-05-01      |
`;

const markdownTaskList = `
  * [x] Task list 1
  * [x] Pending task list 2
  * [ ] Completed task list 3
  * [ ] Completed task list 4 
`;
const cssMarkdownCodeblock = {
  code: `
  console.log('It works!')
  `,
  language: "js",
};

const javaScriptMarkdownCodeblock = `
~~~js
console.log('It works!')
~~~`;
const image = `![perro](https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg)`;
const orderedList = `1. first \n 2. second \n 3. third`;
const maths = `$$\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt$$`;

export default function Post() {
  return (
    <main className={styles.containerMain}>
      <article className={styles.containerArticle}>
        <div className={styles.mainArticle}>
          <div className={styles.headerArticle}>
            <h1>Título del tema</h1>
            <p>
              Ejemplo de descripción donde se alarga el texto para ver cómo se
              ve si sale de la primera línea, para dar los estilos necesarios.
            </p>
          </div>
          <div className={styles.contentArticle}>
            <ReactMarkdown># Understanding Arrow Functions</ReactMarkdown>
            <ReactMarkdown>
              ## Defining Functions to make a text larger than others
            </ReactMarkdown>
            <ReactMarkdown>
              ### Lexical text to make the text larger
            </ReactMarkdown>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              Texto común y corriente. **A bold text** *An italic text* __A
              strong text__ ~~A strikethrough text~~
            </ReactMarkdown>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {orderedList}
            </ReactMarkdown>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              However, a real-life example of dark theme usage outside of a
              small blog or website would probably involve a user with settings
              they can save and persist across any session, not just temporary
              state in localStorage that gets toggled via Context.
            </ReactMarkdown>
            <ReactMarkdown>
              # Understanding Arrow Functions in JavaScript
            </ReactMarkdown>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              - An unordered list text
            </ReactMarkdown>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              However, a real-life example of dark theme usage outside of a
              small blog or website would probably involve a user with settings
              they can save and persist across any session, not just temporary
              state in localStorage that gets toggled via Context. In that case,
              your dark mode state would be saved into Redux, since it would
              probably be saved as `remark-gfm` the whole currently logged-in
              user object, and require an API call to make changes.
            </ReactMarkdown>
            <ReactMarkdown>## Defining Functions</ReactMarkdown>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {blockquote}
            </ReactMarkdown>
            <ReactMarkdown>
              ### Lexical text to make the text larger
            </ReactMarkdown>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              However, a real-life example of dark theme usage outside of a
              small blog or website would probably involve a user with settings
              they can save and persist across any session, not just temporary
              state in localStorage that gets toggled via Context. In that case,
              your dark mode state would be saved into Redux, since it would
              probably be saved as the whole currently logged-in user object,
              and require an API call to make changes.
            </ReactMarkdown>
            <ReactMarkdown
              children={javaScriptMarkdownCodeblock}
              components={{
                code(props) {
                  const { children, className, ...rest } = props;
                  const { language, code } = extractCodeInfo(className || '');
                  
                  return (
                    <Code
                      content={{
                        language,
                        code: String(children).replace(/\n$/, ''),
                        ...rest
                      }}
                    />
                  );
                },
              }}
            />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              Texto común y corriente. **A bold text** *An italic text* __A
              strong text__ ~~A strikethrough text~~
            </ReactMarkdown>
            <ReactMarkdown
              children="A direct URL: https://www.copycat.dev/"
              remarkPlugins={[remarkGfm]}
            />
            <ReactMarkdown
              children="[El texto de la URL](http://www.ejemplo.com)"
              remarkPlugins={[remarkGfm]}
            />
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              children={markdownTaskList}
            />
            
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              However, a real-life example of dark theme usage outside of a
              small blog or website would probably involve a user with settings
              they can save and persist across any session, not just temporary
              state in localStorage that gets toggled via Context.
            </ReactMarkdown>
            <ReactMarkdown
              children={markdownTable}
              remarkPlugins={[remarkGfm]}
            />
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {maths}
            </ReactMarkdown>
            <ReactMarkdown>{image}</ReactMarkdown>
            <ReactMarkdown children={table} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </article>
    </main>
  );
}
