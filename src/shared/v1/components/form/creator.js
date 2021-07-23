import FormModel from "./model";

const createFormComponent = (
  options = {
    formId: "john-doe-of-forms",
    formGroups: [],
    submitText: "Submit",
    submitFunctionString: "event.preventDefault(); alert('Form action!');",
    submitFunction: () => {
      alert("Form action!");
    },
  }
) => {
  const formComponent = new FormModel(options);

  return formComponent;
};

export default createFormComponent;
