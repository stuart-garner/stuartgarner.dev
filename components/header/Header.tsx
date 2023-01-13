import { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        window.scrollY > 50 ? setShow(true) : setShow(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, []);

  return (
    <header className={`navBar ${show && "show"} fixed z-[9999] `}>
      <div className={`container flex h-full items-center bg-white `}>
        <h1 className="m-0 align-middle text-xl text-gray-800">[SG]</h1>
      </div>
    </header>
  );
};

export default Header;
