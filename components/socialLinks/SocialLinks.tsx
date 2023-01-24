import Link from "next/link";
import React from "react";
import Facebook from "../logos/Facebook";
import GitHub from "../logos/GitHub";
import Instagram from "../logos/Instagram";
import LinkedIn from "../logos/LinkedIn";
import Twitter from "../logos/Twitter";

type PropsType = {
  colour: string;
};

function SocialLinks(props: PropsType) {
  const { colour } = props;
  return (
    <div className="flex flex-wrap justify-start gap-10">
      <Link href="https://www.linkedin.com/in/stuartjgarner/">
        <LinkedIn style={`social-icons ${colour}`} />
      </Link>
      <Link href="https://github.com/stuart-garner">
        <GitHub style={`social-icons ${colour}`} />
      </Link>
      <Link href="https://www.instagram.com/stuart__garner/">
        <Instagram style={`social-icons ${colour}`} />
      </Link>
      <Link href="https://www.facebook.com/stuartjgarner">
        <Facebook style={`social-icons ${colour}`} />
      </Link>
      <Link href="https://twitter.com/stuartg5150">
        <Twitter style={`social-icons ${colour}`} />
      </Link>
    </div>
  );
}

export default SocialLinks;
