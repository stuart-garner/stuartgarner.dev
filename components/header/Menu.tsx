import Link from "next/link";

type PropTypes = {
  menuOpen: boolean;
  showHeader?: boolean;
};

const Menu = ({ menuOpen }: PropTypes) => {
  return (
    <div
      id="menu"
      className={`fixed top-0 transition-all duration-500 ease-in-out ${
        menuOpen ? "right-[0px]" : "right-[-300px]"
      } h-screen w-[300px] bg-white px-14 py-20 lg:relative lg:right-0 lg:h-auto lg:py-0 lg:px-0  lg:transition-none`}
    >
      <ul className="flex flex-col justify-end gap-2 lg:flex-row">
        <li>
          <Link href="/" aria-label="Link to home page">
            Home
          </Link>
        </li>
        <li>
          <Link href="/project" aria-label="Link to project">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/blog" aria-label="Link to blog">
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/#contact-form"
            scroll={false}
            aria-label="Link to contact form"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

/*

        <li>
          <Link
            className="button-secondary text-black "
            href="/"
            aria-label="Link to home page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="button-secondary"
            href="/project"
            aria-label="Link to project"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="button-secondary"
            href="/blog"
            aria-label="Link to blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="button-secondary"
            href="/#contact-form"
            scroll={false}
            aria-label="Link to contact form"
          >
            Contact
          </Link>
        </li>
        */
