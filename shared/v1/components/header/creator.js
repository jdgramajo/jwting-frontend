const createHeaderComponent = (navItems = []) => {
  const header = new HeaderModel({
    navBarBrand: {
      href: "//", // "//" Specifies same protocol usage
      img: {
        src: "/jwt.svg",
        alt: "",
        width: "70pem",
        height: "50pem",
      },
    },
    navItems,
  });

  return header;
};
