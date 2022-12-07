import * as React from "react";

import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { RTNode } from "@prismicio/types";
import { PrismicNextImage } from "@prismicio/next";

interface Props {
  heading: [] | [RTNode, ...RTNode[]] | null | undefined;
  subHeading: [] | [RTNode, ...RTNode[]] | null | undefined;
  profilePic: any;
}

const Introduction = (props: Props) => {
  const { heading, profilePic } = props;
  return (
    <section id="intro-section" className="h-[600px] bg-gray-800">
      <div className="container relative mx-auto h-full bg-gray-900 p-10 lg:py-36 2xl:py-56">
        <div className="w-[100%] sm:w-[50%] md:w-[50%]">
          <PrismicRichText field={heading} />
        </div>

        <Link className="button-link" href="/#about-section">
          Learn more
        </Link>
        <div className="absolute bottom-0 right-0 h-[50%] sm:h-[70%] md:h-[70%] lg:h-[90%]">
          <PrismicNextImage field={profilePic} />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
