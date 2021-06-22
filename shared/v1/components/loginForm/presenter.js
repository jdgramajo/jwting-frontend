const addLoginForm = () => {
  const form = new LoginFormModel({
    formGroups: [
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
    submitText: "Log in",
  });

  document.body.appendChild(form.element);
};

addLoginForm();
