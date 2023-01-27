import React from "react";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
/**
 * @typedef {import("@prismicio/client").Content.TextSlice} TextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSlice>} TextProps
 * @param { TextProps }
 */
const Text = ({ slice }) => {
  const htmlSerializer = {
    paragraph: ({ children, key, type, node, text }) => `<p>${text}</p>`,
    oListItem: ({ children, key, type, node, text }) => `<li>${text}</li>`,
  };

  const result = prismicH.asHTML(slice.primary.text, null, htmlSerializer);
  console.log({ result });
  return (
    <div>
      {slice.primary.text ? (
        <>
          <span dangerouslySetInnerHTML={{ __html: result }} />
        </>
      ) : (
        <p>start by editing this slice from inside Slice Machine!</p>
      )}
    </div>
  );
};

export default Text;
