import createHeaderComponent from "../../shared/v1/components/header/creator";
import router from "../../shared/v1/router";
import jwt from "../../../jwt.svg";
import createMainComponent from "./creator";
import { getMyRolesRequest } from "../../shared/v1/requests/auth";

const addRolesToMain = async (mainComponent) => {
  const response = await getMyRolesRequest();

  if (!response.ok) {
    // TODO: Appropriate actions based on error types.
    console.log(response.statusText);
    router.toError();
    return;
  }

  const { roles } = await response.json();

  if (roles) {
    mainComponent.mainTitleText.innerText = "Login successful!";
    mainComponent.rolesTitleText.innerText = "Your roles are:";
    roles.map((role) => {
      const item = document.createElement("li");
      item.innerText = `${role}`;
      mainComponent.rolesList.appendChild(item);
    });
  } else {
    mainComponent.mainTitleText.innerText = "Login successful...";
    mainComponent.rolesTitleText.innerText = "...but getting roles failed.";
    mainComponent.mainTitleText.innerText = `No roles found: ${roles}`;
  }
};

const start = async () => {
  document.getElementById("tabIcon").setAttribute("href", jwt);

  const headerComponent = createHeaderComponent([
    { routerFunction: router.toChangePwd, name: "Change Password" },
    { routerFunction: router.toSignout, name: "Sign out" },
  ]);
  headerComponent.appendComponentToElement(document.body);

  const mainComponent = createMainComponent();
  await addRolesToMain(mainComponent);
  mainComponent.appendComponentToElement(document.body);
};

start();
