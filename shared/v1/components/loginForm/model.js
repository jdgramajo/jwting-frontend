class LoginFormModel {
  constructor(options) {
    const label = document.createElement("label");
    label.setAttribute("for", "username-group-input");
    label.innerHTML = "Username:";

    const input = document.createElement("input");
    input.setAttribute("type", "email");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", "usernameGroup-input");
    input.setAttribute("aria-describedby", "username-help");

    const inputHelp = document.createElement("div");
    inputHelp.setAttribute("id", "username-help");
    inputHelp.setAttribute("class", "form-text");
    inputHelp.innerHTML = "Your username.";

    const usernameGroup = document.createElement("div");
    usernameGroup.setAttribute("class", "mb-3");
    usernameGroup.appendChild(label);
    usernameGroup.appendChild(input);
    usernameGroup.appendChild(inputHelp);
  
    const flexRow = document.createElement("div");
    // flexRow.setAttribute("class", "row col-12");
    flexRow.appendChild(usernameGroup);
  
    const form = document.createElement("form");
    form.setAttribute("class", "row col-xl-4 col-lg-4 col-md-4 col-sm-8");
    form.appendChild(flexRow);

    this.element = document.createElement("div");
    this.element.setAttribute("class", "d-flex justify-content-center");
    this.element.setAttribute("style", "margin-top: 100px;")
    this.element.appendChild(form);
  }
}
