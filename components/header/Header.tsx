import { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        window.scrollY > 175 ? setShow(true) : setShow(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, []);

  const onMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`nav-bar ${show && "show"}`}>
      <h1 className="m-0 align-middle text-xl ">[SG]</h1>
    </header>
  );
};

export default Header;
