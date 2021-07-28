import createHeaderComponent from "./shared/v1/components/header/creator";
import createFormComponent from "./shared/v1/components/form/creator";
import router from "./shared/v1/router";
import { login } from "./shared/v1/services/formsService";
// import FormService from "./shared/v1/services/formsService";

const header = createHeaderComponent([
  { routerFunction: router.toRoot, name: "Sign in" },
]);
header.appendComponentToElement(document.body);

const loginForm = createFormComponent({
  formId: "login-form",
  formGroups: [
    {
      groupName: "username",
      labelText: "Username:",
      input: { type: "text", helpText: "Your username.", required: true },
    },
    {
      groupName: "password",
      labelText: "Password:",
      input: { type: "password", required: true },
    },
  ],
  submitText: "Login",
  submitFunctionString: "login(event)",
  submitFunction: login,
});
loginForm.appendComponentToElement(document.body);
