const createHeaderComponent = (navItems = []) => {
  const header = new HeaderModel({
    navBarBrand: {
      href: "/",
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
