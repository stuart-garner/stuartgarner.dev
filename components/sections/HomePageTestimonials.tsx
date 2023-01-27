import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { v4 as uuidv4 } from "uuid";
import { RTNode } from "@prismicio/types";
import BottomWave from "../waves/Bottom";
import TopCurve from "../waves/TopCurve";
import { motion } from "framer-motion";

type PropType = {
  heading: [] | [RTNode, ...RTNode[]] | null | undefined;
  content: [] | [RTNode, ...RTNode[]] | null | undefined;
};

const HomePageTestimonials = (props: PropType) => {
  const { heading, content } = props;
  let delay: number = 0;
  return (
    <section
      id="testimonials-section"
      className="pt-[150px] pb-[200px] lg:pb-[300px]"
    >
      <TopCurve style="fill-slate-300" />

      <div className="container text-gray-100">
        <PrismicRichText field={heading} />
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
          {content?.map((item: any, index: number) => {
            delay += 0.1;
            return (
              <div
                key={uuidv4()}
                className="flex h-[100%] flex-col justify-between gap-10"
              >
                <div>
                  <PrismicRichText field={item.quote} />
                </div>
                <div className="flex flex-row justify-start gap-5 ">
                  <div className="w-[75px]  grayscale">
                    <PrismicNextImage
                      field={item.profile_picture}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="mb-0 max-h-[75px] basis-3/4">
                    <PrismicRichText field={item.name} />
                    <PrismicRichText field={item.affiliation} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <BottomWave colour="fill-black" />
    </section>
  );
};

export default HomePageTestimonials;
