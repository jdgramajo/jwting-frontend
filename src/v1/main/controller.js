import HeaderModel from "../../shared/v1/components/header/model";
import MainModel from "./model";
import jwt from "../../../jwt.svg";

import router from "../../shared/v1/router";
import { getUserRoles } from "../../shared/v1/services/userService";

const tabIcon = document.createElement("link");
tabIcon.setAttribute("rel", "icon");
tabIcon.setAttribute("href", jwt);
document.head.appendChild(tabIcon);

const start = async () => {
  const headerModel = new HeaderModel({
    navBarBrand: {
      routerFunction: router.toRoot,
      img: {
        src: jwt,
        alt: "",
        width: "70pem",
        height: "50pem",
      },
    },
    navItems: [
      { routerFunction: router.toChangePwd, name: "Change Password" },
      { routerFunction: router.toSignout, name: "Sign out" },
    ],
  });
  document.body.appendChild(headerModel.component);

  const roles = await getUserRoles();
  const mainModel = new MainModel(roles);
  document.body.appendChild(mainModel.component);
};

start();
