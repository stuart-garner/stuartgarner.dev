import * as React from "react";
import classNames from "classnames";

import styles from "./testimonials.module.scss";
import TestimonialCard from "./testimonialCard";
import { TestimonialItemType } from "./testimonialCard";

type Props = {
  content: Array<TestimonialItemType>;
};
const Testimonials = (props: Props) => {
  const { content } = props;
  return (
    <section
      id="testimonials-section"
      className={classNames(styles.testimonialsSection, "section")}
    >
      <div className={classNames(styles.wrapper, "wrapper")}>
        <div className={classNames(styles.content, "content")}>
          <div className={styles.testimonialText}>
            <h2>Testimonials</h2>
            <div className={styles.testimonialsWrapper}>
              {content?.map((item, index) => {
                return (
                  <TestimonialCard key={`testimonial${index}`} {...item} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
