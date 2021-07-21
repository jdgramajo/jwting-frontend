const createFormComponent = () => {
  const formComponent = new FormModel({
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

  return formComponent;
};
