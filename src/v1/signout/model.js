class SignoutModel {
  constructor() {
    const mainTitleDiv = document.createElement("div");
    mainTitleDiv.setAttribute(
      "class",
      "d-flex flex-row justify-content-center"
    );
    const mainTitleText = document.createElement("h1");
    mainTitleText.innerText = "Signing out...";
    mainTitleDiv.appendChild(mainTitleText);

    const hiddenSpinnerSpan = document.createElement("span");
    hiddenSpinnerSpan.setAttribute("class", "visually-hidden");
    hiddenSpinnerSpan.innerText = "Signing out...";

    const spinnerDiv = document.createElement("div");
    spinnerDiv.setAttribute("class", "spinner-border m-3");
    spinnerDiv.setAttribute("style", "width: 4rem; height: 4rem;");
    spinnerDiv.setAttribute("role", "status");
    spinnerDiv.appendChild(hiddenSpinnerSpan);

    const spinnerFlexContainerDiv = document.createElement("div");
    spinnerFlexContainerDiv.setAttribute(
      "class",
      "d-flex flex-row justify-content-center"
    );
    spinnerFlexContainerDiv.appendChild(spinnerDiv);

    this.component = document.createElement("div");
    this.component.setAttribute(
      "class",
      "container col-xl-4 col-lg-4 col-md-4 col-sm-8"
    );
    this.component.setAttribute("style", "margin-top: 150px;");
    this.component.appendChild(mainTitleDiv);
    this.component.appendChild(spinnerFlexContainerDiv);
  }

  appendComponentToElement = (parent = document.body) => {
    parent.appendChild(this.component);
  };
}

export default SignoutModel;
