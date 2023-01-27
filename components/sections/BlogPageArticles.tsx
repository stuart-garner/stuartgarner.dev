import { PrismicRichText } from "@prismicio/react";
import { v4 as uuidv4 } from "uuid";
import { RTNode } from "@prismicio/types";
import BottomWave from "../waves/Bottom";

import Article from "../article";

type PropType = {
  heading: [] | [RTNode, ...RTNode[]] | null | undefined;
  content: Record<string, any>;
};

const BlogPageArticles = (props: PropType) => {
  const { heading, content } = props;
  return (
    <section id="article-section" className="bg-white pb-[200px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {content?.map((item: any, index: number) => {
            return <Article key={uuidv4()} article={item} />;
          })}
        </div>
      </div>
      <BottomWave colour="fill-black" />
    </section>
  );
};

export default BlogPageArticles;
