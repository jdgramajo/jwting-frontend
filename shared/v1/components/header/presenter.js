const addHeader = () => {
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
    navItems: [{ href: "/", name: "Login" }],
  });

  document.body.appendChild(header.element);
};

addHeader();
