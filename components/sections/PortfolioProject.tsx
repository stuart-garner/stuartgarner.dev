import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { RTNode } from "@prismicio/types";
import { PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";

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
      <div>
        <PrismicNextImage
          field={screenshot}
          className="project-image mt-10 rounded-xl lg:mt-0 lg:mb-0 "
        />
      </div>
      <div>
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />

        {(live_link.url || githublink.url) && (
          <div className="flex gap-2 pt-3">
            {live_link.url && (
              <Link
                className="button py-2 px-5"
                href="/#about-section"
                aria-label="Live project"
              >
                Live
              </Link>
            )}
            {githublink.url && (
              <Link
                className="button py-2 px-5"
                href="/#about-section"
                aria-label="Project repo"
              >
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
