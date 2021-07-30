import HeaderModel from "./model";
import router from "../../router";
import jwt from "../../../../../jwt.svg";

const createHeaderComponent = (navItems = []) => {
  const header = new HeaderModel({
    navBarBrand: {
      routerFunction: router.toRoot,
      img: {
        src: jwt,
        alt: "",
        width: "70pem",
        height: "50pem",
      },
    },
    navItems,
  });

  return header;
};

export default createHeaderComponent;
