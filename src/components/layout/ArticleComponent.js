import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import ExtractCodeInfo from "helpers/ExtractCodeInfo";
import LinkRenderer from "helpers/LinkRendered";
import Code from "components/Code";
import "katex/dist/katex.min.css";
import styles from "../../styles/Home.module.css";

export default function ArticleComponent({markdown}) {
  return (
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
  )
}
