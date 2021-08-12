import HeaderModel from "../../shared/v1/components/header/model";
import MainModel from "./model";
import jwt from "../../../jwt.svg";

import router from "../../shared/v1/router";
import { getMyRolesRequest } from "../../shared/v1/requests/auth";

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

  const response = await getMyRolesRequest();
  if (!response.ok) {
    // TODO: Appropriate actions based on error types.
    console.log(response.statusText);
    router.toError();
    return;
  }

  const { roles } = await response.json();
  const mainModel = new MainModel(roles);
  document.body.appendChild(mainModel.component);
};

start();
