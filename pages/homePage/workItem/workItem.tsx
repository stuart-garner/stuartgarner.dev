import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { RTNode } from "@prismicio/types";

import Link from "next/link";
import * as React from "react";

import styles from "./workItem.module.scss";

export type WorkItemType = {
  title: [] | [RTNode, ...RTNode[]] | null | undefined;
  description: [] | [RTNode, ...RTNode[]] | null | undefined;
  githublink?: any;
  live_link?: any;
  screenshot: any;
};

const WorkItem = (props: WorkItemType) => {
  const { title, description, screenshot, githublink, live_link } = props;
  return (
    <div className={styles.workItem}>
      <div className={styles.workItemContent}>
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />

        {(live_link || githublink) && (
          <div className={styles.workItemLinks}>
            {live_link && (
              <Link className="button-link" href="/#about-section">
                Live
              </Link>
            )}
            {githublink && (
              <Link className="button-link" href="/#about-section">
                GitHub
              </Link>
            )}
          </div>
        )}
      </div>
      <div className={styles.workItemPicture}>
        <PrismicNextImage field={screenshot} className={styles.image} />
      </div>
    </div>
  );
};

export default WorkItem;
