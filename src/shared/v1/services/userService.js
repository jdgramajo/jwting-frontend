import { getMyRolesRequest } from "../requests/auth";

const getUserRoles = async () => {
  try {
    const response = await getMyRolesRequest();
    if (!response.ok) return response;
    const responseJSON = await response.json();
    return responseJSON?.roles;
  } catch (err) {
    return err;
  }
};

export { getUserRoles };
