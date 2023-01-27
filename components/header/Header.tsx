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
        <div className="menu-toggle lg:hidden">
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
        className={`mobile-menu fixed right-[-300px] top-0 z-[99] h-full w-[300px] bg-white pt-[100px] pl-[30px] lg:right-10 lg:z-[102] lg:h-auto lg:bg-transparent lg:pt-0 ${
          showMenu && "show-menu"
        }`}
        role="navigation"
      >
        <ul id="menu" className="lg:flex lg:justify-end lg:gap-10">
          <li>
            <Link href="/" aria-label="Link to home page">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" aria-label="Link to blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
