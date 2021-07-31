import createHeaderComponent from "../../shared/v1/components/header/creator";
import MainModel from "./model";
import router from "../../shared/v1/router";
import jwt from "../../../jwt.svg";
import { getMyRolesRequest } from "../../shared/v1/requests/auth";

document.getElementById("tabIcon").setAttribute("href", jwt);

const start = async () => {
  try {
    const response = await getMyRolesRequest();

    if (!response.ok) {
      // TODO: Appropriate actions based on error types.
      console.log(response.statusText);
      router.toError();
      return;
    }

    const headerComponent = createHeaderComponent([
      { routerFunction: router.toChangePwd, name: "Change Password" },
      { routerFunction: router.toSignout, name: "Sign out" },
    ]);
    headerComponent.appendComponentToElement(document.body);

    const main = new MainModel();
    main.appendComponentToElement(document.body);

    const { roles } = await response.json();
    if (roles) {
      main.mainTitleText.innerText = "Login successful!";
      main.rolesTitleText.innerText = "Your roles are:";
      roles.map((role) => {
        const item = document.createElement("li");
        item.innerText = `${role}`;
        main.rolesList.appendChild(item);
      });
    } else {
      main.mainTitleText.innerText = `No roles found: ${roles}`;
    }
  } catch (err) {
    console.log(err);
    router.toError();
  }
};

start();
