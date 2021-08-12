import SignoutModel from "./model";
import jwt from "../../../jwt.svg";

import { signoutRequest } from "../../shared/v1/requests/auth";
import router from "../../shared/v1/router";

const tabIcon = document.createElement("link");
tabIcon.setAttribute("rel", "icon");
tabIcon.setAttribute("href", jwt);
document.head.appendChild(tabIcon);

const start = async () => {
  const signoutModel = new SignoutModel();
  document.body.appendChild(signoutModel.component);

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
