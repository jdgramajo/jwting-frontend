class FormModel {
  constructor(options) {
    if (!options?.formGroups?.length) return;

    const form = document.createElement("form");
    form.setAttribute(
      "class",
      "row justify-content-center col-xl-4 col-lg-4 col-md-4 col-sm-8"
    );
    form.setAttribute("id", options.formId);
    form.setAttribute("onsubmit", ""); // options.submitFunctionString);
    form.setAttribute("novalidate", "true");
    options?.formGroups?.map((formGroup) => {
      form.appendChild(this.createFormGroupRow(formGroup));
    });

    const formSubmitButton = document.createElement("button");
    formSubmitButton.setAttribute("type", "submit");
    formSubmitButton.setAttribute("class", "btn btn-dark mt-2 col-10");
    formSubmitButton.addEventListener("onclick", options.submitFunction);
    formSubmitButton.innerHTML = options.submitText;
    form.appendChild(formSubmitButton);

    this.component = document.createElement("div");
    this.component.setAttribute("class", "d-flex justify-content-center");
    this.component.setAttribute("style", "margin-top: 100px;");
    this.component.appendChild(form);
  }

  createFormGroupRow = (options) => {
    if (!options) return;

    const formGroup = document.createElement("div");
    formGroup.setAttribute("class", "mb-3");

    const label = document.createElement("label");
    label.setAttribute("for", `${options?.groupName}-group-input`);
    label.innerHTML = `${options?.labelText}`;
    formGroup.appendChild(label);

    const input = document.createElement("input");
    input.setAttribute("type", `${options.input?.type}`);
    if (options.input?.type === "password")
      input.setAttribute("autocomplete", "new-password");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", `${options.groupName}-group-input`);
    if (options.input?.required) input.setAttribute("required", "true");
    formGroup.appendChild(input);

    if (options.input?.helpText) {
      input.setAttribute(
        "aria-describedby",
        `${options?.input?.name}-group-input-help`
      );
      const inputHelp = document.createElement("div");
      inputHelp.setAttribute("id", `${options.groupName}-group-input-help`);
      inputHelp.setAttribute("class", "form-text");
      inputHelp.innerHTML = `${options?.input?.helpText}`;
      formGroup.appendChild(inputHelp);
    }

    const flexRow = document.createElement("div");
    flexRow.appendChild(formGroup);

    return flexRow;
  };

  appendComponentToElement = (parent = document.body) => {
    parent.appendChild(this.component);
  };
}

export default FormModel;
