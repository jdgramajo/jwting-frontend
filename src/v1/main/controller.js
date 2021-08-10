import createHeaderComponent from "../../shared/v1/components/header/creator";
import router from "../../shared/v1/router";
import jwt from "../../../jwt.svg";
import createMainComponent from "./creator";

document.getElementById("tabIcon").setAttribute("href", jwt);

const headerComponent = createHeaderComponent([
  { routerFunction: router.toChangePwd, name: "Change Password" },
  { routerFunction: router.toSignout, name: "Sign out" },
]);
headerComponent.appendComponentToElement(document.body);

const mainComponent = createMainComponent();
mainComponent.appendComponentToElement(document.body);
