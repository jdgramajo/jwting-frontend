import { getMyRolesRequest } from "../../shared/v1/requests/auth";

class MainModel {
  constructor() {
    const mainTitleDiv = document.createElement("div");
    mainTitleDiv.setAttribute(
      "class",
      "d-flex flex-row justify-content-center"
    );
    this.mainTitleText = document.createElement("h1");
    mainTitleDiv.appendChild(this.mainTitleText);

    this.component = document.createElement("div");
    this.component.setAttribute(
      "class",
      "container col-xl-4 col-lg-4 col-md-4 col-sm-8"
    );
    this.component.setAttribute("style", "margin-top: 150px;");
    this.component.appendChild(mainTitleDiv);
  }

  getUserRoles = async () => {
    try {
      const response = await getMyRolesRequest();
      if (response.ok) {
        const { roles } = await response.json();
        console.log(roles);
        return roles;
      } else {
        // TODO: Appropriate actions based on error types.
        console.log(response.statusText);
        return;
      }
    } catch (err) {
      console.log(err);
      // router.toError();
      return;
    }
  };

  setComponent = async () => {
    const roles = await this.getUserRoles();
    if (!roles) {
      this.mainTitleText.innerText = "Couldn't get roles!";
      return;
    }

    this.mainTitleText.innerText = "Sign in successful!";

    const rolesTitleDiv = document.createElement("div");
    rolesTitleDiv.setAttribute(
      "class",
      "d-flex flex-row justify-content-center"
    );
    rolesTitleDiv.setAttribute(
      "style",
      "margin-top: 50px; margin-bottom: 25px;"
    );
    const rolesTitleText = document.createElement("h2");
    rolesTitleText.innerText = "Your roles are:";
    rolesTitleDiv.appendChild(rolesTitleText);

    const rolesList = document.createElement("ul");
    roles.map((role) => {
      const item = document.createElement("li");
      item.innerText = `${role}`;
      rolesList.appendChild(item);
    });

    this.component.appendChild(rolesTitleDiv);
    this.component.appendChild(rolesList);
  };

  appendComponentToElement = async (parent = document.body) => {
    await this.setComponent();
    parent.appendChild(this.component);
  };
}

export default MainModel;
