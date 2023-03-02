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

  console.log(slice.primary, slice.primary.code_type.toLowerCase());
  if (slice.primary.code_block && slice.primary.code_type) {
    return (
      <ReactSyntaxHighlighter
        language={slice.primary.code_type.toLowerCase()}
        style={style}
      >
        {slice.primary.code_block}
      </ReactSyntaxHighlighter>
    );
  }
  return <p>start by editing this slice from inside Slice Machine!</p>;
};

export default CodeBlock;
