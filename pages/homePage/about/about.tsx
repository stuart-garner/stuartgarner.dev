import React from "react";

import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { RTNode } from "@prismicio/types";

interface Props {
  heading: [] | [RTNode, ...RTNode[]] | null | undefined;
  body: [] | [RTNode, ...RTNode[]] | null | undefined;
}

const About = (props: Props) => {
  const { heading, body } = props;
  return (
    <section id="about-section" className="bg-black">
      <div className="container mx-auto p-10 text-gray-50">
        <PrismicRichText field={heading} />
        <div className="md:text-xl xl:text-2xl">
          <PrismicRichText field={body} />
        </div>
        <Link className="button-link" href="/#about-section">
          [My resume]
        </Link>
      </div>
    </section>
  );
};

export default About;
