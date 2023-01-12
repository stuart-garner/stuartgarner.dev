import React from "react";
import Facebook from "../logos/Facebook";
import GitHub from "../logos/GitHub";
import Instagram from "../logos/Instagram";
import LinkedIn from "../logos/LinkedIn";
import Twitter from "../logos/Twitter";

function SocialLinks() {
  return (
    <div className="flex h-[50px] justify-start gap-10">
      <LinkedIn style="social-icons" />
      <GitHub style="social-icons" />
      <Instagram style="social-icons" />
      <Facebook style="social-icons" />
      <Twitter style="social-icons" />
    </div>
  );
}

export default SocialLinks;
