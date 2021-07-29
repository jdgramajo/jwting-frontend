import createHeaderComponent from "../../shared/v1/components/header/creator";
import MainModel from "./model";
import router from "../../shared/v1/router";

const headerComponent = createHeaderComponent([
  { routerFunction: router.toChangePwd, name: "Change Password" },
  { routerFunction: router.toSignout, name: "Sign out" },
]);
headerComponent.appendComponentToElement(document.body);

const main = new MainModel();
main.appendComponentToElement(document.body);

// getMyRolesRequest()
//   .then((response) => {
//     if (response.ok) {
//       response.json().then((roles) => {
//         const main = new MainModel(roles);
//         main.appendComponentToElement(document.body);
//       });
//     } else {
//       // TODO: Appropriate actions based on error types.
//       console.log(response.statusText);
//       router.toRoot();
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//     router.toError();
//   });
