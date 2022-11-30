import * as React from "react";
import classNames from "classnames";

import styles from "./portfolio.module.scss";
import WorkItem from "../workItem";
import { WorkItemType } from "../workItem/workItem";

type Props = {
  content: Array<WorkItemType>;
};

const Portfolio = (props: Props) => {
  const { content } = props;
  return (
    <section
      id="portfolio-section"
      className={classNames(styles.portfolioSection, "section")}
    >
      <div className={classNames(styles.wrapper, "wrapper")}>
        <div className={classNames(styles.content, "content")}>
          <div className={styles.portfolioText}>
            <h2>Portfolio</h2>
            {content?.map((item, index) => {
              return <WorkItem key={`workItem${index}`} {...item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
