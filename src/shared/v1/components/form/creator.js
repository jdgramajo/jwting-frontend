import FormModel from "./model";

const createFormComponent = (options) => {
  const formComponent = new FormModel(options);

  return formComponent;
};

export default createFormComponent;
