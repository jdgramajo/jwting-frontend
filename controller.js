const header = createHeaderComponent([
  { routerFunction: router.toRoot, name: "Sign in" },
]);
header.appendComponentToElement(document.body);

const loginForm = createLoginFormComponent();
loginForm.appendComponentToElement(document.body);
