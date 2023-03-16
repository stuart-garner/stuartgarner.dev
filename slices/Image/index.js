import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param { ImageProps }
 */
const Image = ({ slice }) => {
  return (
    <div>
      <PrismicNextImage
        field={slice.primary.image}
        className="project-image mt-5 rounded-xl"
      />
      {slice.primary.description ? (
        <span className="mb-5 text-gray-300">
          <PrismicRichText field={slice.primary.description} />
        </span>
      ) : (
        <p>start by editing this slice from inside Slice Machine!</p>
      )}
    </div>
  );
};

export default Image;
