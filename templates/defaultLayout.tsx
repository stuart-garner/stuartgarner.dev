import react, { ReactNode } from "react";

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
        <div className="container flex h-full flex-row justify-between gap-20 text-gray-500 md:mb-[50px] md:justify-center">
          <div className="flex h-full basis-1/2 flex-col justify-center gap-5 text-center md:basis-1/3 md:gap-10 md:text-left lg:basis-1/4">
            Built with:
            <img src="./next.svg" alt="Next JS" />
            <img src="./typescript.svg" alt="TypeScript" />
            <img src="./tailwindcss.svg" alt="Tailwind CSS" />
          </div>
          <div className="flex h-full basis-1/2 flex-col justify-center gap-5 text-center md:basis-1/3 md:gap-10 md:text-left lg:basis-1/4">
            Powered by:
            <img src="./prismic.svg" alt="Prismic CMS" />
            Hosted by:
            <img src="./vercel.svg" alt="Vercel" />
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
