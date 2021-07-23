const backendRootURL = "https://jwting.herokuapp.com:443"; // "http://localhost:8080";

const postCredentials = async (username, password) => {
  const url = `${backendRootURL}/auth/signin`;
  const init = {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ username, password }),
    headers: {
      Accept: "*/*",
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  return await fetch(url, init);
};

const postPWDChange = async (newPassword, confirmPassword) => {
  const url = `${backendRootURL}/auth/changepwd`;
  const init = {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ newPassword, confirmPassword }),
    headers: {
      Accept: "*/*",
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  return await fetch(url, init);
};

const getMyRolesRequest = async () => {
  const url = `${backendRootURL}/myRoles`;
  const init = { credentials: "include" };

  return await fetch(url, init);
};

const signoutRequest = async () => {
  const url = `${backendRootURL}/auth/signout`;
  const init = {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "*/*",
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  return await fetch(url, init);
};
