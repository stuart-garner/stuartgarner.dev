import React from "react";
import * as prismicH from "@prismicio/helpers";
/**
 * @typedef {import("@prismicio/client").Content.TextSlice} TextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSlice>} TextProps
 * @param { TextProps }
 */
const Text = ({ slice }) => {
  const htmlSerializer = {
    paragraph: ({ text }) => `<p class="mb-[24px]">${text}</p>`,
    oList: ({ children }) =>
      `<ol class="ml-[30px] list-decimal">${children}</ol>`,
    oListItem: ({ children, text }) => `<li>${text}</li>`,
    heading3: ({ text }) => `<h3 class="mt-[30px]">${text}</h3>`,
    strong: ({ text }) => `<strong>${text}</strong>`,
  };

  const result = prismicH.asHTML(slice.primary.text, null, htmlSerializer);

  if (slice.primary.text) {
    return (
      <span
        className="blog-entry-text"
        dangerouslySetInnerHTML={{ __html: result }}
      />
    );
  }
  return <p>start by editing this slice from inside Slice Machine!</p>;
};

export default Text;
