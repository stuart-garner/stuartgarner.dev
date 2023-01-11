import Image from "next/image";
import { ReactNode } from "react";

import ContactForm from "../components/contactForm";

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
      <footer className="clip-path-footerPoly flex flex-col justify-center gap-10 bg-black">
        <div className="container flex justify-start gap-20">
          <div className=" flex h-full basis-1/3 flex-row justify-between gap-20 text-gray-500 md:mb-[50px] md:justify-center">
            <div className="flex h-full basis-1/2 flex-col justify-center gap-5  ">
              Built with:
              <Image src="/next.svg" alt="Next JS" width={200} height={100} />
              <Image
                src="/typescript.svg"
                alt="TypeScript"
                width={200}
                height={100}
              />
              <Image
                src="/tailwindcss.svg"
                alt="Tailwind CSS"
                width={200}
                height={100}
              />
            </div>
            <div className="flex h-full basis-1/2 flex-col justify-center gap-5  ">
              Powered by:
              <Image
                src="/prismic.svg"
                alt="Prismic CMS"
                width={200}
                height={100}
              />
              <Image
                src="/formspree.svg"
                alt="Forms by Formspree"
                width={200}
                height={100}
              />
              Hosted by:
              <Image src="/vercel.svg" alt="Vercel" width={200} height={100} />
            </div>
          </div>
          <div className="flex basis-1/3 flex-col gap-5">
            <h4 className="text-gray-50">Come and find me!</h4>

            <div className="grid grid-cols-4 justify-start gap-5">
              <div className="max-w-[80px]">
                <Image
                  src="/linkedin-in.svg"
                  alt="Linked In Profile"
                  width={300}
                  height={300}
                  className="invert"
                />
              </div>
              <div className="max-w-[80px]">
                <Image
                  src="/github.svg"
                  alt="Github Profile"
                  width={300}
                  height={300}
                  className="invert"
                />
              </div>
              <div className="max-w-[80px]">
                <Image
                  src="/instagram.svg"
                  alt="Instagram Profile"
                  width={300}
                  height={300}
                  className="invert"
                />
              </div>
              <div className="max-w-[80px]">
                <Image
                  src="/facebook.svg"
                  alt="Facebook Profile"
                  width={300}
                  height={300}
                  className="invert"
                />
              </div>
              <div className="max-w-[80px]">
                <Image
                  src="/twitter.svg"
                  alt="Twitter Profile"
                  width={300}
                  height={300}
                  className=" invert"
                />
              </div>
            </div>
            <p className="text-gray-50">Or drop me an email...</p>
          </div>
          <div className="basis-1/3">
            <ContactForm />
          </div>
        </div>
        <div className="text-center text-gray-500">
          Copyright © Stuart Garner. Al rights reserved.
        </div>
      </footer>
    </>
  );
};

export default DefaultLayout;
