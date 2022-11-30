import * as React from "react";
import classNames from "classnames";

import styles from "./introduction.module.scss";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { RTNode } from "@prismicio/types";
import { PrismicNextImage } from "@prismicio/next";

interface Props {
  heading: [] | [RTNode, ...RTNode[]] | null | undefined;
  subHeading: [] | [RTNode, ...RTNode[]] | null | undefined;
  profilePic: any;
}

const Introduction = (props: Props) => {
  const { heading, profilePic, subHeading } = props;
  return (
    <section
      id="intro-section"
      className={classNames(styles.introSection, "section")}
    >
      <div className={classNames(styles.wrapper, "wrapper")}>
        <div className={classNames(styles.content, "content")}>
          <div>
            <PrismicRichText field={heading} />
            <PrismicRichText field={subHeading} />
          </div>
          <Link className="button-link" href="/#about-section">
            Learn more
          </Link>
        </div>
        <PrismicNextImage
          field={profilePic}
          className={styles.profilePicture}
        />
      </div>
    </section>
  );
};

export default Introduction;
