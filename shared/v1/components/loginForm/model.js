class LoginFormModel {
  constructor(options) {
    const form = document.createElement("form");
    form.setAttribute("class", "row col-xl-4 col-lg-4 col-md-4 col-sm-8");
    form.appendChild(
      this.createFormGroupRow({
        groupName: "username",
        labelText: "Username:",
        input: { type: "text", helpText: "Your username." },
      })
    );

    this.element = document.createElement("div");
    this.element.setAttribute("class", "d-flex justify-content-center");
    this.element.setAttribute("style", "margin-top: 100px;");
    this.element.appendChild(form);
  }

  createFormGroupRow = (options) => {
    if (!options) return;

    const formGroup = document.createElement("div");
    formGroup.setAttribute("class", "mb-3");

    const label = document.createElement("label");
    label.setAttribute("for", `${options?.groupName}-group-input`);
    label.innerHTML = `${options.labelText}`;
    formGroup.appendChild(label);

    const input = document.createElement("input");
    input.setAttribute("type", `${input.type}`);
    input.setAttribute("class", "form-control");
    input.setAttribute("id", `${options?.groupName}-group-input`);
    input.setAttribute(
      "aria-describedby",
      `${options.input.name}-group-input-help`
    );
    formGroup.appendChild(input);

    if (options?.input?.helpText) {
      const inputHelp = document.createElement("div");
      inputHelp.setAttribute("id", `${options?.groupName}-group-input-help`);
      inputHelp.setAttribute("class", "form-text");
      inputHelp.innerHTML = `${options?.input?.helpText}`;
      formGroup.appendChild(inputHelp);
    }

    const flexRow = document.createElement("div");
    flexRow.appendChild(formGroup);

    return flexRow;
  };
}
