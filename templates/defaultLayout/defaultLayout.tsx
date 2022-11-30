import react, { ReactNode } from "react";

import styles from "./defaultLayout.module.scss";

type Props = {
  children: ReactNode;
};

const DefaultLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>FOOTER</footer>
    </>
  );
};

export default DefaultLayout;
