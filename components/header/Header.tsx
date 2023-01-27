import Link from "next/link";
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
    <>
      <header className={`nav-bar ${show && "show"}`}>
        <Link href="/" scroll={false} aria-label="Link to home page">
          <span className="m-0 align-middle text-xl ">[SG]</span>
        </Link>
        <div id="menuToggle" className="hidden">
          Burger Menu
        </div>
        <div className="menu-toggle">
          <input
            type="checkbox"
            aria-labelledby="menuToggle"
            onChange={onMenuToggle}
          />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <nav
        className={`mobile-menu ${showMenu && "show-menu"}`}
        role="navigation"
      >
        <ul id="menu">
          <li>Home</li>
          <li>About</li>
          <li>Info</li>
          <li>Contact</li>
          <li>Show me more</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
