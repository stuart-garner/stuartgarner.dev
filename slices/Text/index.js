import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TextSlice} TextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSlice>} TextProps
 * @param { TextProps }
 */
const Text = ({ slice }) => {
  console.log({ slice });
  return (
    <div>
      {slice.primary.text ? (
        <PrismicRichText field={slice.primary.text} />
      ) : (
        <p>start by editing this slice from inside Slice Machine!</p>
      )}
    </div>
  );
};

export default Text;
