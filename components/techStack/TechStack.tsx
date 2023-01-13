import React from "react";
import Formspree from "../logos/Formspree";
import Next from "../logos/Next";
import Prismic from "../logos/Prismic";
import Tailwind from "../logos/Tailwind";
import TypeScript from "../logos/TypeScript";
import Vercel from "../logos/Vercel";

function TechStack() {
  return (
    <div className="container w-full pt-[50px]">
      <div className="flex w-full flex-row justify-between gap-5 text-gray-400 md:justify-center md:gap-20 xl:gap-5">
        <span className="flex flex-col items-center gap-5 xl:flex-row">
          <h6>Built with:</h6>
          <Next style="tech-stack-logo" />
          <TypeScript style="tech-stack-logo" />
          <Tailwind style="tech-stack-logo" />
        </span>
        <span className="flex flex-col items-center gap-5 xl:flex-row">
          <h6>Powered by:</h6>
          <Prismic style="tech-stack-logo" />
          <Formspree style="tech-stack-logo" />
          <h6>Hosted by:</h6>
          <Vercel style="tech-stack-logo" />
        </span>
      </div>
    </div>
  );
}

export default TechStack;
