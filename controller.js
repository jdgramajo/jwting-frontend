const header = createHeaderComponent([
  { routerFunction: router.toRoot, name: "Sign in" },
]);
header.appendComponentToElement(document.body);

const loginForm = createFormComponent({
  formId: "login-form",
  formGroups: [
    {
      groupName: "username",
      labelText: "Username:",
      input: { type: "text", helpText: "Your username.", required: true },
    },
    {
      groupName: "password",
      labelText: "Password:",
      input: { type: "password", required: true },
    },
  ],
  submitText: "Login",
  submitFunctionString: "login(event)",
});
loginForm.appendComponentToElement(document.body);
