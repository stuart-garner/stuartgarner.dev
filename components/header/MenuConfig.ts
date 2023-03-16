export type MenuItemConfigType = {
  name: string;
  link: string;
  subMenu: Array<MenuItemConfigType>;
};

const MenuConfig: Array<MenuItemConfigType> = [
  {
    name: "home",
    link: "/",
    subMenu: [],
  },
  {
    name: "projects",
    link: "",
    subMenu: [],
  },
  {
    name: "blog",
    link: "/blog",
    subMenu: [],
  },
  {
    name: "contact",
    link: "/#contact-form",
    subMenu: [],
  },
];

export default MenuConfig;
