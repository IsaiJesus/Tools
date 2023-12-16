import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "../styles/Home.module.css";
import Code from "components/Code";
	
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus"

const text = `**A bold text** \n *An italic text* \n __A strong text__ \n 1. An ordered list text - An unordered list text \n ~~A strikethrough text~~ `;
const markdown = `- A direct URL: https://www.copycat.dev/`;
const markdownTable = `
| S/N | Pet | Image |
|--|--|--|
| 1 | Cat |![A cat looking at you]() |
| 2 | Dog |![A dog looking at you](https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg)|
`;
const markdownTaskList = `
  - [ ] Task list 1
  - [ ] Pending task list 2
  - [x] Completed task list 3
  - [x] Completed task list 4 
`;
const link = `We’ll use the [react-syntax-highlighter](<https://github.com/react-syntax-highlighter/react-syntax-highlighter>) in this tutorial and you can install it using the command below`;
const cssMarkdownCodeblock = {
  code: `// function that adds "2 numbers" together
  const sumTwoNumbers = (num1, num2) => num1 + num2;
   
  // call the function
  console.log(sumTwoNumbers(1, 2)); // 3
   
  // array of users
  const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Bob", age: 25 },
  ];
   
  // print out the users age 
  console.log(users.map(user => user.age)); // [30, 28, 25]`,
  language: "js",
};

const javaScriptMarkdownCodeblock = `
~~~js
// function that adds "2 numbers" together
const sumTwoNumbers = (num1, num2) => num1 + num2;
 
// call the function
console.log(sumTwoNumbers(1, 2)); // 3
 
// array of users
const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 28 },
  { name: "Bob", age: 25 },
];
 
// print out the users age 
console.log(users.map(user => user.age)); // [30, 28, 25]
~~~
`;

export default function Post() {
  return (
    <main className={styles.containerMain}>
      <article className={styles.topicContainer}>
        <div className={styles.topicContainerCenter}>
          <div className={styles.topicHeader}>
            <h1>Título del tema</h1>
            <p>Descripción del tema</p>
          </div>
          <div className={styles.topicContent}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
            <div className="table-container">
              <ReactMarkdown
                children={markdownTable}
                remarkPlugins={[remarkGfm]}
              />
            </div>
            <ReactMarkdown
              children={markdownTaskList}
              remarkPlugins={[remarkGfm]}
            />
            <ReactMarkdown>{link}</ReactMarkdown>
            Código:
            <Code content={cssMarkdownCodeblock} />
            Markdown:
            <ReactMarkdown
              children={javaScriptMarkdownCodeblock}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={vsDark}
                      language={match[1]}
                      PreTag="section" // parent tag
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </div>
        </div>
      </article>
    </main>
  );
}
