import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import {
  EmptyImageFieldImage,
  FilledImageFieldImage,
  RTNode,
} from "@prismicio/types";
import { PrismicNextImage } from "@prismicio/next";

type PropType = {
  heading: [] | [RTNode, ...RTNode[]] | null | undefined;
  body: [] | [RTNode, ...RTNode[]] | null | undefined;
  profilePicture:
    | EmptyImageFieldImage
    | FilledImageFieldImage
    | null
    | undefined;
};

const HomePageAbout = (props: PropType) => {
  const { heading, body, profilePicture } = props;
  return (
    <section id="about-section" className=" bg-white">
      <div className="container text-gray-600 ">
        <div className="flex flex-col-reverse items-center justify-start gap-20 lg:flex-row lg:items-start">
          <div className="lg:basis-1/2">
            <div className="mb-10 ">
              <PrismicRichText field={heading} />
            </div>

            <div className="mb-10  text-xl md:columns-1 md:gap-12 xl:text-2xl">
              <PrismicRichText field={body} />
            </div>
          </div>

          <div className="w-full md:max-w-[400px] lg:max-w-none lg:basis-1/2">
            <PrismicNextImage
              field={profilePicture}
              className="rounded-[50%]"
            />
          </div>
        </div>
        <Link className="button" href="/#about-section">
          My resume
        </Link>
      </div>
    </section>
  );
};

export default HomePageAbout;
