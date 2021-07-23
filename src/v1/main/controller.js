import createHeaderComponent from "../../shared/v1/components/header/creator";
import router from "../../shared/v1/router";
import MainModel from "./model";

const start = async () => {
  const headerComponent = createHeaderComponent([
    { routerFunction: router.toChangePwd, name: "Change Password" },
    { routerFunction: router.toSignout, name: "Sign out" },
  ]);
  headerComponent.appendComponentToElement(document.body);

  try {
    const response = await getMyRolesRequest();
    if (response.ok) {
      const { roles } = await response.json();
      const main = new MainModel(roles);
      main.appendComponentToElement(document.body);
    } else {
      // TODO: Appropriate actions based on error types.
      console.log(response.statusText);
      router.toRoot();
    }
  } catch (err) {
    console.log(err);
    router.toError();
  }
};

start();
