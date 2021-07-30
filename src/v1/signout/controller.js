import SignoutModel from "./model";
import { signoutRequest } from "../../shared/v1/requests/auth";
import router from "../../shared/v1/router";

const start = async () => {
  const signoutComponent = new SignoutModel();
  signoutComponent.appendComponentToElement(document.body);

  const response = await signoutRequest();

  try {
    if (response.ok) {
      router.toRoot();
    } else {
      console.log(response.statusText);
      router.toError();
    }
  } catch (err) {
    console.log(`${err}`);
    router.toError();
  }
};

start();
