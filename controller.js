const header = createHeaderComponent([{ href: "/", name: "Login" }]);
header.appendComponentToElement(document.body);

const loginForm = createLoginFormComponent();
loginForm.appendComponentToElement(document.body);
