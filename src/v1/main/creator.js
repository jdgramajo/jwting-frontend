import MainModel from "./model";

const createMainComponent = (roles) => {
  const mainComponent = new MainModel(roles);
  return mainComponent;
};

export default createMainComponent;
