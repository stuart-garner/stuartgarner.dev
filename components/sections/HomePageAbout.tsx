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
      <div className="container flex flex-col-reverse items-center justify-between gap-20  text-slate-900 lg:flex-row">
        <div className="basis-2/3">
          <PrismicRichText field={heading} />
          <div className="mb-10 md:text-xl xl:text-2xl">
            <PrismicRichText field={body} />
          </div>
          <Link className="button" href="/#about-section">
            My resume
          </Link>
        </div>
        <div className="max-w-[400px] basis-1/3 lg:max-w-none">
          <PrismicNextImage field={profilePicture} />
        </div>
      </div>
    </section>
  );
};

export default HomePageAbout;
