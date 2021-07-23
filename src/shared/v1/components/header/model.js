class HeaderModel {
  constructor(options) {
    this.navBarBrand = options.navBarBrand;
    this.navItems = options.navItems;

    this.component = document.createElement("nav");
    this.component.setAttribute(
      "class",
      "navbar navbar-expand-sm navbar-dark fixed-top bg-dark"
    );

    this.navBarContainerElement = document.createElement("div");
    this.navBarContainerElement.setAttribute("class", "container");

    if (this.navBarBrand)
      this.navBarContainerElement.appendChild(this.createNavBarBrandElement());

    if (this.navItems) {
      this.navBarContainerElement.appendChild(
        this.createNavBarTogglerButtonWithSpanElement()
      );
      this.navBarContainerElement.appendChild(
        this.createNavBarCollapsableItemsListElement()
      );
    }

    this.component.appendChild(this.navBarContainerElement);
  }

  createNavBarBrandElement() {
    const navBarBrandElement = document.createElement("div");
    navBarBrandElement.setAttribute("class", "navbar-brand");
    navBarBrandElement.addEventListener(
      "click",
      this.navBarBrand.routerFunction
    );

    const navBarBrandImageElement = document.createElement("img");
    navBarBrandImageElement.setAttribute("src", this.navBarBrand.img.src);
    navBarBrandImageElement.setAttribute("alt", this.navBarBrand.img.alt);
    navBarBrandImageElement.setAttribute("width", this.navBarBrand.img.width);
    navBarBrandImageElement.setAttribute("height", this.navBarBrand.img.height);

    navBarBrandElement.appendChild(navBarBrandImageElement);

    return navBarBrandElement;
  }

  createNavBarTogglerButtonWithSpanElement() {
    const togglerSpan = document.createElement("span");
    togglerSpan.setAttribute("class", "navbar-toggler-icon");

    const navBarTogglerButtonElement = document.createElement("button");
    navBarTogglerButtonElement.setAttribute("class", "navbar-toggler");
    navBarTogglerButtonElement.setAttribute("data-bs-toggle", "collapse");
    navBarTogglerButtonElement.setAttribute(
      "data-bs-target",
      "#navbarCollapse"
    );
    navBarTogglerButtonElement.appendChild(togglerSpan);

    return navBarTogglerButtonElement;
  }

  createNavBarCollapsableItemsListElement() {
    const navBarItemsListElement = document.createElement("ul");
    navBarItemsListElement.setAttribute("class", "navbar-nav");

    this.navItems.map((item) => {
      const listItemElement = document.createElement("li");
      listItemElement.setAttribute("class", "nav-item align-self-end");
      const divElement = document.createElement("div");
      divElement.setAttribute("class", "nav-link");
      divElement.addEventListener("click", item.routerFunction);
      divElement.style.cursor = "pointer";
      divElement.innerText = item.name;
      listItemElement.appendChild(divElement);
      navBarItemsListElement.appendChild(listItemElement);
    });

    const navBarCollapseElement = document.createElement("div");
    navBarCollapseElement.setAttribute(
      "class",
      "collapse navbar-collapse justify-content-md-end"
    );
    navBarCollapseElement.setAttribute("id", "navbarCollapse");
    navBarCollapseElement.appendChild(navBarItemsListElement);

    return navBarCollapseElement;
  }

  appendComponentToElement = (parent = document.body) => {
    parent.appendChild(this.component);
  };
}

export default HeaderModel;
