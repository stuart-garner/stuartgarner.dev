import * as React from "react";
import classNames from "classnames";

import styles from "./testimonials.module.scss";
import TestimonialCard from "./testimonialCard";
import { TestimonialItemType } from "./testimonialCard";
import { PrismicNextImage } from "@prismicio/next";

type Props = {
  content: Array<TestimonialItemType>;
  clients?: Array<any>;
};
const Testimonials = (props: Props) => {
  const { content, clients } = props;
  return (
    <section id="testimonials-section">
      <div className="container mx-auto bg-slate-500">
        <h2>Testimonials</h2>
        <div className="grid grid-cols-3">
          {content?.map((item, index) => {
            return <TestimonialCard key={`testimonial${index}`} {...item} />;
          })}
        </div>
        <div>
          {clients?.map((item, index) => {
            return (
              <PrismicNextImage
                key={`logo${index}`}
                field={item.client_logo}
                className={styles.logo}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
