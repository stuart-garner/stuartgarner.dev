import React from "react";
import classNames from "classnames";

import styles from "./about.module.scss";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { RTNode } from "@prismicio/types";

interface Props {
  heading: [] | [RTNode, ...RTNode[]] | null | undefined;
  body: [] | [RTNode, ...RTNode[]] | null | undefined;
}

const About = (props: Props) => {
  const { heading, body } = props;
  return (
    <section
      id="about-section"
      className={classNames(styles.aboutSection, "section")}
    >
      <div className={classNames(styles.wrapper, "wrapper")}>
        <div className={classNames(styles.content, "content")}>
          <div className={styles.aboutText}>
            <PrismicRichText field={heading} />
            <PrismicRichText field={body} />

            <Link className="button-link" href="/#about-section">
              [My resume]
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
