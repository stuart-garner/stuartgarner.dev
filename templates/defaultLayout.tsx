import react, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DefaultLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <header className="fixed z-10 w-full ">
        <div className="container mx-auto px-10 py-5 text-white">[SG]</div>
      </header>
      <main className="w-screen bg-gray-600">{children}</main>
      <footer className=" h-{300px] bg-red-400">FOOTER</footer>
    </>
  );
};

export default DefaultLayout;
