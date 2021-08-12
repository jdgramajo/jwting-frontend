import HeaderModel from "./shared/v1/components/header/model";
import FormModel from "./shared/v1/components/form/model";
import jwt from "../jwt.svg";

import router from "./shared/v1/router";
import { login } from "./shared/v1/services/formsService";

const tabIcon = document.createElement("link");
tabIcon.setAttribute("rel", "icon");
tabIcon.setAttribute("href", jwt);
document.head.appendChild(tabIcon);

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
  navItems: [{ routerFunction: router.toRoot, name: "Sign in" }],
});
document.body.appendChild(headerModel.component);

const loginFormModel = new FormModel({
  formId: "login-form",
  formGroups: [
    {
      groupName: "username",
      labelText: "Username:",
      input: { type: "text", helpText: "Your username.", required: true },
    },
    {
      groupName: "password",
      labelText: "Password:",
      input: { type: "password", required: true },
    },
  ],
  submitText: "Login",
  submitFunction: login,
});
document.body.appendChild(loginFormModel.component);
