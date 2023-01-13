import { ReactNode } from "react";

import Footer from "../components/footer";

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
      <Footer />
    </>
  );
};

export default DefaultLayout;
