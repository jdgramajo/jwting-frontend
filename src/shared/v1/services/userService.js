import { getMyRolesRequest } from "../requests/auth";
import router from "../router";

const getUserRoles = async () => {
  try {
    const response = await getMyRolesRequest();
    if (!response.ok) {
      // TODO: Appropriate actions based on error types.
      console.log(response.statusText);
      router.toError();
      return [`response not ok, response is: ${response}`];
    }
    const roles = await response.json();
    return roles;
  } catch (err) {
    console.log(err);
    return [`the whole getting roles failed: ${err}`];
  }
};

export { getUserRoles };
