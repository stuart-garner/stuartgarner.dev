import react, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DefaultLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <header className="bg-slate-200">
        <div className="container flex h-full items-center text-black">
          <h1 className="m-0 align-middle text-xl">[SG]</h1>
        </div>
      </header>
      <main className="w-screen bg-slate-900">{children}</main>
      <footer className="h-[500px] bg-black ">
        <div className="container flex h-full  text-gray-200">
          Built with Next JS, Typsript & Tailwind. CMS powered by Prismic
        </div>
      </footer>
    </>
  );
};

export default DefaultLayout;
