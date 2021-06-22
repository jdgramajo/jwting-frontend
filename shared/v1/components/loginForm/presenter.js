const addLoginForm = () => {
  const form = new LoginFormModel();

  console.log(form);
  document.body.appendChild(form.element);
};

addLoginForm();
