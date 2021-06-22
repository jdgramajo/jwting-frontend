const addLoginForm = () => {
  const form = new LoginFormModel();

  document.body.appendChild(form.element);
};

addLoginForm();
