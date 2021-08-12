class MainModel {
  constructor(roles) {
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

    const rolesTitleDiv = document.createElement("div");
    rolesTitleDiv.setAttribute(
      "class",
      "d-flex flex-row justify-content-center"
    );
    rolesTitleDiv.setAttribute(
      "style",
      "margin-top: 50px; margin-bottom: 25px;"
    );
    this.rolesTitleText = document.createElement("h2");
    rolesTitleDiv.appendChild(this.rolesTitleText);
    this.component.appendChild(rolesTitleDiv);

    this.rolesList = document.createElement("ul");
    this.component.appendChild(this.rolesList);
    this.addRolesToList(roles);
  }

  addRolesToList = (roles) => {
    if (roles) {
      this.mainTitleText.innerText = "Login successful!";
      this.rolesTitleText.innerText = "Your roles are:";
      roles.map((role) => {
        const item = document.createElement("li");
        item.innerText = `${role}`;
        this.rolesList.appendChild(item);
      });
    } else {
      this.mainTitleText.innerText = "Login successful...";
      this.rolesTitleText.innerText = `...but getting roles failed, roles says: ${roles}`;
    }
  };
}

export default MainModel;
