const header = createHeaderComponent([
  { routerFunction: router.toRoot, name: "Sign in" },
]);
header.appendComponentToElement(document.body);

const loginForm = createFormComponent(
  [
    {
      groupName: "username",
      labelText: "Username:",
      input: { type: "text", helpText: "Your username." },
    },
    {
      groupName: "password",
      labelText: "Password:",
      input: { type: "password" },
    },
  ],
  "Login",
  "login(event)"
);
loginForm.appendComponentToElement(document.body);
