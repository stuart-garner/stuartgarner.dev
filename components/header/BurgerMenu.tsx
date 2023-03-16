type PropTypes = {
  onToggle: () => void;
  menuOpen: boolean;
  showHeader: boolean;
};

const BurgerMenu = ({ onToggle, menuOpen, showHeader }: PropTypes) => {
  return (
    <div id="burgerMenu" className="z-10 lg:hidden ">
      <div id="menuToggle" className="hidden">
        Burger Menu
      </div>
      <div className="relative top-0 right-0 block select-none">
        <input
          type="checkbox"
          className="absolute top-[-7px] left-[-5px] z-20 block h-8 w-10 cursor-pointer opacity-0"
          aria-labelledby="menuToggle"
          onChange={onToggle}
        />
        <span
          className={`z-1 relative mb-2 block h-1 w-7 origin-right  transition-all duration-500 ${
            menuOpen &&
            "mb-0  w-9 translate-y-[-8px] translate-x-0 rotate-[-45deg]"
          } ${showHeader ? "bg-black" : "bg-white"}`}
        ></span>
        <span
          className={`z-1 relative mb-2 block h-1 w-7 ${
            menuOpen && "mb-0 opacity-0"
          } ${showHeader ? "bg-black" : "bg-white"}`}
        ></span>
        <span
          className={`z-1 relative block h-1 w-7 origin-right  transition-all duration-500 ${
            menuOpen && " w-9 translate-y-2 rotate-45"
          } ${showHeader ? "bg-black" : "bg-white"}`}
        ></span>
      </div>
    </div>
  );
};

export default BurgerMenu;
