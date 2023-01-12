import Image from "next/image";
import { ReactNode } from "react";

import ContactForm from "../components/contactForm";
import SocialLinks from "../components/socialLinks";

import TechStack from "../components/techStack";

type Props = {
  children: ReactNode;
};

const DefaultLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <header className="fixed ">
        <div className="container flex h-full items-center text-slate-50">
          <h1 className="m-0 align-middle text-xl">[SG]</h1>
        </div>
      </header>
      <main>{children}</main>
      <footer className="clip-path-footerPoly flex flex-col justify-center gap-10 bg-black text-gray-100 ">
        <div className="container flex flex-col justify-start gap-20 xl:flex-row">
          <div className="flex basis-1/2 flex-col gap-5">
            <h4>
              If you like what you see and what to learn more, drop me a
              message.
            </h4>
            <p>Or find me on...</p>
            <SocialLinks />
          </div>
          <div className="basis-1/2">
            <ContactForm />
          </div>
        </div>
        <TechStack />
        <div className="container w-[90%] text-center text-gray-600">
          Copyright © Stuart Garner {new Date().getFullYear()}. All rights
          reserved.
        </div>
      </footer>
    </>
  );
};

export default DefaultLayout;

/*


    

        */
