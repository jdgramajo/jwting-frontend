const createHeaderComponent = (navItems = []) => {
  const header = new HeaderModel({
    navBarBrand: {
      routerFunction: router.toRoot,
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
