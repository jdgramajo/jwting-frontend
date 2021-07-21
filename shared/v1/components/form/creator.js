const createFormComponent = (
  formGroups = [],
  submitText = "Submit",
  submitFunctionCall = "event.preventDefault(); alert('Form action!');"
) => {
  const formComponent = new FormModel({
    formGroups,
    submitText,
    submitFunctionCall,
  });

  return formComponent;
};
