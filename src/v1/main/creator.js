import MainModel from "./model";
import { getMyRolesRequest } from "../../shared/v1/requests/auth";

const createMainComponent = async () => {
  const response = await getMyRolesRequest();

  if (!response.ok) {
    // TODO: Appropriate actions based on error types.
    console.log(response.statusText);
    router.toError();
    return;
  }

  const { roles } = await response.json();
  if (roles) {
    const mainComponent = new MainModel(roles);
    mainComponent.mainTitleText.innerText = "Login successful!";
    mainComponent.rolesTitleText.innerText = "Your roles are:";
    roles.map((role) => {
      const item = document.createElement("li");
      item.innerText = `${role}`;
      mainComponent.rolesList.appendChild(item);
    });
    return mainComponent;
  } else {
    const mainComponent = new MainModel(roles);
    mainComponent.mainTitleText.innerText = "Login successful...";
    mainComponent.rolesTitleText.innerText = "...but getting roles failed.";
    mainComponent.mainTitleText.innerText = `No roles found: ${roles}`;
    return mainComponent;
  }
};

export default createMainComponent;
