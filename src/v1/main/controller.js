import createHeaderComponent from "../../shared/v1/components/header/creator";
import router from "../../shared/v1/router";
import jwt from "../../../jwt.svg";
import createMainComponent from "./creator";
import { getMyRolesRequest } from "../../shared/v1/requests/auth";

const start = async () => {
  document.getElementById("tabIcon").setAttribute("href", jwt);

  const headerComponent = createHeaderComponent([
    { routerFunction: router.toChangePwd, name: "Change Password" },
    { routerFunction: router.toSignout, name: "Sign out" },
  ]);
  headerComponent.appendComponentToElement(document.body);

  const response = await getMyRolesRequest();
  if (!response.ok) {
    // TODO: Appropriate actions based on error types.
    console.log(response.statusText);
    router.toError();
    return;
  }

  const { roles } = await response.json();
  const mainComponent = createMainComponent(roles);
  mainComponent.appendComponentToElement(document.body);
};

start();
