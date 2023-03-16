import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.SectionSeperatorSlice} SectionSeperatorSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SectionSeperatorSlice>} SectionSeperatorProps
 * @param { SectionSeperatorProps }
 */
const SectionSeperator = ({ slice }) => (
  <div className="flex h-20 w-full items-center justify-center gap-10 ">
    <span className="block h-[2px] w-full rounded-xl bg-gray-300"></span>
  </div>
);

export default SectionSeperator;
