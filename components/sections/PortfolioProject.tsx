import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { RTNode } from "@prismicio/types";
import { PrismicNextImage } from "@prismicio/next";

type PropsType = {
  title: [] | [RTNode, ...RTNode[]] | null | undefined;
  description: [] | [RTNode, ...RTNode[]] | null | undefined;
  githublink?: any;
  live_link?: any;
  screenshot: any;
};

const PortfolioProject = (props: PropsType) => {
  const { title, description, screenshot, githublink, live_link } = props;
  return (
    <div className="flex flex-col-reverse gap-10">
      <div className="lg:basis-1/3">
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />

        {(live_link || githublink) && (
          <div className="flex gap-2 pt-3">
            {live_link && (
              <Link className="button py-2 px-5" href="/#about-section">
                Live
              </Link>
            )}
            {githublink && (
              <Link className="button py-2 px-5" href="/#about-section">
                GitHub
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="project-image mt-10 rounded-xl lg:mt-0 lg:mb-0 lg:basis-2/3">
        <PrismicNextImage field={screenshot} />
      </div>
    </div>
  );
};

export default PortfolioProject;
