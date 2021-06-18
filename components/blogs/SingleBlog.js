import classes from "./SingleBlog.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const SingleBlog = (props) => {
  const customeRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${props.data.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={300}
    //       height={200}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${props.data.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p className={classes.blogDesc}>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  // console.log(props);
  return (
    <>
      <h2 className={classes.blogHeading}>{props.data.title}</h2>

      <ReactMarkdown components={customeRenderers}>
        {props.data.content}
      </ReactMarkdown>
    </>
  );
};

export default SingleBlog;
