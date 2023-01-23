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
    <div className="flex flex-col gap-10 ">
      <PrismicNextImage
        field={screenshot}
        className="project-image mt-10 rounded-xl lg:mt-0 lg:mb-0 "
      />
      <div>
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />

        {(live_link.url || githublink.url) && (
          <div className="flex gap-2 pt-3">
            {live_link.url && (
              <Link className="button py-2 px-5" href="/#about-section">
                Live
              </Link>
            )}
            {githublink.url && (
              <Link className="button py-2 px-5" href="/#about-section">
                GitHub
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioProject;
