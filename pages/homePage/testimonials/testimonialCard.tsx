import * as React from "react";

import styles from "./testimonialCard.module.scss";

import { RTNode } from "@prismicio/types";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type TestimonialItemType = {
  quote: [] | [RTNode, ...RTNode[]] | null | undefined;
  profile_picture: any;
  name: [] | [RTNode, ...RTNode[]] | null | undefined;
  affiliation: [] | [RTNode, ...RTNode[]] | null | undefined;
};

const TestimonialCard = (props: TestimonialItemType) => {
  const { quote, profile_picture, name, affiliation } = props;
  return (
    <div className={styles.root}>
      <div className={styles.quote}>
        <PrismicRichText field={quote} />
      </div>
      <div className={styles.citation}>
        <PrismicNextImage field={profile_picture} className={styles.headShot} />

        <div>
          <PrismicRichText field={name} />
          <PrismicRichText field={affiliation} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
