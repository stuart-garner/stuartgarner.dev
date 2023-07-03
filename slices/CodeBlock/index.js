import React, { useEffect, useState } from "react";
import { Prism as ReactSyntaxHighlighter } from "react-syntax-highlighter";

/**
 * @typedef {import("@prismicio/client").Content.CodeBlockSlice} CodeBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CodeBlockSlice>} CodeBlockProps
 * @param { CodeBlockProps }
 */
const CodeBlock = ({ slice }) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    import("react-syntax-highlighter/dist/esm/styles/prism/one-dark").then(
      (mod) => setStyle(mod.default)
    );
  });

  if (slice.primary.code_block && slice.primary.code_type) {
    return (
      <div className="mb-12 mt-[-10px] rounded-xl">
        <ReactSyntaxHighlighter
          language={slice.primary.code_type.toLowerCase()}
          style={style}
        >
          {slice.primary.code_block}
        </ReactSyntaxHighlighter>
      </div>
    );
  }
  return <p>start by editing this slice from inside Slice Machine!</p>;
};

export default CodeBlock;
