const createFormComponent = (
  options = {
    formId: "john-doe-of-forms",
    formGroups: [],
    submitText: "Submit",
    submitFunctionString: "event.preventDefault(); alert('Form action!');",
  }
) => {
  const formComponent = new FormModel(options);

  return formComponent;
};
