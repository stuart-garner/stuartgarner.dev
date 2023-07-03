import { PrismicRichText } from "@prismicio/react";
import { v4 as uuidv4 } from "uuid";
import { RTNode } from "@prismicio/types";
import BottomWave from "../waves/Bottom";

import Article from "../article";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

type PropType = {
  heading: [] | [RTNode, ...RTNode[]] | null | undefined;
  content: Record<string, any>;
};

const BlogPageArticles = (props: PropType) => {
  const { heading, content } = props;
  return (
    <section id="article-section" className="bg-white pb-[200px]">
      <div className="container">
        <div className="mb-10 flex w-full items-center justify-start gap-5">
          <h2 className="m-0 text-black">Recent Blog Posts</h2>
          <Link className="button flex items-center gap-5" href="/blog">
            All Entries
            <FontAwesomeIcon icon={faNewspaper} className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {content?.map((item: any, index: number) => {
            return <Article key={uuidv4()} article={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogPageArticles;
