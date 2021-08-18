import HeaderModel from "../../shared/v1/components/header/model";
import FormModel from "../../shared/v1/components/form/model";
import jwt from "../../../jwt.svg";

import { getMyRolesRequest } from "../../shared/v1/requests/auth";
import router from "../../shared/v1/router";
import { changePWD } from "../../shared/v1/services/formsService";

const tabIcon = document.createElement("link");
tabIcon.setAttribute("rel", "icon");
tabIcon.setAttribute("href", jwt);
document.head.appendChild(tabIcon);

const submitPasswordChange = async (event) => {
  const success = await changePWD(event);
  if (success) {
    router.toMain();
  } else {
    router.toError();
  }
};

const start = async () => {
  try {
    const response = await getMyRolesRequest();

    if (!response.ok) {
      console.log(response.statusText);
      router.toMain();
      return;
    }

    const headerModel = new HeaderModel({
      navBarBrand: {
        routerFunction: router.toRoot,
        img: {
          src: jwt,
          alt: "",
          width: "70pem",
          height: "50pem",
        },
      },
      navItems: [{ routerFunction: router.toSignout, name: "Sign out" }],
    });
    document.body.appendChild(headerModel.component);

    const changePasswordFormModel = new FormModel({
      formId: "change-password-form",
      formGroups: [
        {
          groupName: "new-password",
          labelText: "New Password:",
          input: { type: "password", required: true },
        },
        {
          groupName: "confirm-password",
          labelText: "Confirm Password:",
          input: { type: "password", required: true },
        },
      ],
      submitText: "Change Password",
      submitFunction: submitPasswordChange,
    });
    document.body.appendChild(changePasswordFormModel.component);
  } catch (err) {
    console.log(err);
    router.toError();
  }
};

start();
