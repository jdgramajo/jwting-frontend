class MainModel {
  constructor(roles = []) {
    const mainTitleDiv = document.createElement("div");
    mainTitleDiv.setAttribute(
      "class",
      "d-flex flex-row justify-content-center"
    );
    const mainTitleText = document.createElement("h1");
    mainTitleText.innerText = "Sign in successful!";
    mainTitleDiv.appendChild(mainTitleText);

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

    this.component = document.createElement("div");
    this.component.setAttribute(
      "class",
      "container col-xl-4 col-lg-4 col-md-4 col-sm-8"
    );
    this.component.setAttribute("style", "margin-top: 150px;");
    this.component.appendChild(mainTitleDiv);
    this.component.appendChild(rolesTitleDiv);
    this.component.appendChild(rolesList);
  }

  appendComponentToElement = (parent = document.body) => {
    parent.appendChild(this.component);
  };
}
