import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import styles from "../styles/Home.module.css";
import Code from "components/Code";
import ExtractCodeInfo from "helpers/ExtractCodeInfo";
import LinkRenderer from "helpers/LinkRendered";

const markdown = `
# Understanding Arrow Functions
Texto común y corriente. **A bold text** *An italic text* __A strong text__ ~~A strikethrough text~~
## Defining Functions to make a text larger than others
However, a real-life example of dark theme usage outside of a small blog or website would probably involve a user with settings they can save and persist across any session, not just temporary state in localStorage that gets toggled via Context.
1. first
2. second
3. third
### Lexical text to make the text larger
- An unordered list text
- An unordered list text
- - An unordered list text

![perro](https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg)

However, a real-life example of dark theme usage outside of a small blog or website would probably involve a user with settings they can save and persist across any session, not just temporary state in localStorage that gets toggled via Context. In that case, your dark mode state would be saved into Redux, since it would probably be saved as the whole currently logged-in user object, and require an API call to make changes.

| Usuario | Nombre | Correo Electrónico | Dirección | Teléfono | Última Compra | Total Gastado | Preferencias | Estado de Cuenta | Fecha Registro |
|--|--|--|--|--|--|--|--|--|--|
| Usuario1 | Juan Pérez | juan@email.com | Calle A, Ciudad B | 555-123-4567 | 2023-01-15 | $350 | Moda, Electrónica | Activo | 2022-12-01 |
| Usuario2 | María González | maria@email.com | Av. Principal, Pueblo C | 555-987-6543 | 2023-02-02 | $200 | Deportes, Hogar | Inactivo | 2023-01-10 |
| Usuario3 | Carlos Ramírez | carlos@email.com | Calle X, Ciudad Y | 555-555-5555 | 2023-03-10 | $500 | Tecnología | Activo | 2023-02-20 |
| Usuario4 | Ana López | ana@email.com | Calle Z, Ciudad W | 555-111-2222 | 2023-04-05 | $150 | Belleza, Libros | Inactivo | 2023-03-05 |
| Usuario5 | Pablo Martínez | pablo@email.com | Av. Secundaria, Pueblo D | 555-333-4444 | 2023-05-20 | $300 | Viajes, Moda | Activo | 2023-04-15 |
| Usuario6 | Laura Sánchez | laura@email.com | Calle Y, Ciudad Z | 555-666-7777 | 2023-06-12 | $450 | Hogar, Electrónica| Inactivo | 2023-05-01 |

## Defining Functions
> A block quote
 
However, a real-life example of dark theme usage outside of a small blog or website would probably involve a user with settings they can save and persist across any [El texto de la URL](http://www.ejemplo.com) session, not just temporary state in localStorage that gets toggled via Context. In that case, your dark mode state would be saved into Redux, since it would probably be saved as the whole currently logged-in user object, and require an API call to make changes.

$$\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt$$

* [x] Task list 1
* [x] Pending task list 2
* [ ] Completed task list 3
* [ ] Completed task list 4

~~~sql
-- Crear una tabla llamada 'usuarios'
CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  edad INT,
  correo_electronico VARCHAR(100)
);

-- Insertar datos en la tabla 'usuarios'
INSERT INTO usuarios (id, nombre, edad, correo_electronico)
VALUES
  (1, 'Juan Pérez', 25, 'juan@example.com'),
  (2, 'María Gómez', 30, 'maria@example.com'),
  (3, 'Carlos López', 22, 'carlos@example.com');

-- Consultar todos los usuarios
SELECT * FROM usuarios;

-- Actualizar la edad de Juan Pérez
UPDATE usuarios
SET edad = 26
WHERE nombre = 'Juan Pérez';

-- Consultar nuevamente todos los usuarios después de la actualización y texto demás pa ver cómo se ve grande
SELECT * FROM usuarios;

-- Eliminar a Carlos López de la tabla
DELETE FROM usuarios
WHERE nombre = 'Carlos López';

-- Consultar una vez más todos los usuarios después de la eliminación
SELECT * FROM usuarios;
~~~

direct URL: https://www.copycat.dev/ However, a real-life example of dark theme usage outside of a small blog or website would probably involve a user with settings they can save and persist across any session, not just temporary state in localStorage that \`código de ejemplo\` gets toggled via Context.
`;

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
            <ReactMarkdown
              children={markdown}
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex]}
              components={{
                code(props) {
                  const { children, className, ...rest } = props;
                  const { language, code } = ExtractCodeInfo(className || "");

                  return language ? (
                    <Code
                      content={{
                        language,
                        code: String(children).replace(/\n$/, ""),
                        ...rest,
                      }}
                    />
                  ) : (
                    <code {...rest}>{children}</code>
                  );
                },
                a: LinkRenderer,
              }}
            />
          </div>
        </div>
      </article>
    </main>
  );
}
