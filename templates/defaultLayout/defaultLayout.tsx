import react, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DefaultLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <main className="w-screen bg-gray-600">{children}</main>
      <footer>FOOTER</footer>
    </>
  );
};

export default DefaultLayout;
