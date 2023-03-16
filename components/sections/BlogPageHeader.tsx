import { PrismicRichText } from "@prismicio/react";
import BottomWave from "../waves/Bottom";
import { RTNode } from "@prismicio/types";

type PropsType = {
  title: [] | [RTNode, ...RTNode[]] | null | undefined;
};

const BlogPageHeader = ({ title }: PropsType) => {
  return (
    <section id="blog-header" className="min-h-[400px] text-white ">
      <div className="container">
        <PrismicRichText field={title} />
      </div>
      <BottomWave colour="fill-white" />
    </section>
  );
};

export default BlogPageHeader;
