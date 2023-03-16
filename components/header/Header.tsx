import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      window.scrollY > 375 ? setShowScrollTop(true) : setShowScrollTop(false);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <header className="absolute z-50 h-auto w-full">
      <nav className="flex items-center justify-between bg-transparent px-3 py-3 ">
        <div>
          <Link
            href="/"
            scroll={false}
            aria-label="Link to home page"
            className="font-[Orbitron] text-4xl text-white"
          >
            [SG]
          </Link>
        </div>
      </nav>
      <div
        className={`fixed bottom-5 right-5 rounded-xl bg-slate-900 p-6 text-white transition-all duration-300 ${
          showScrollTop ? "bottom-5" : "bottom-[-100px]"
        }`}
      >
        <button>hello</button>
      </div>
    </header>
  );
};

export default Header;
