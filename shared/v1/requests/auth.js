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

// Use as "changePWD(event)" in a "onsubmit" attribute in a form.
const changePWD = async (event) => {
  // event.preventDefault();
  // const newPassword = document.getElementById("new-password-group-input").value;
  // const confirmPassword = document.getElementById(
  //   "confirm-password-group-input"
  // ).value;
  // const credentialsResponse = await postCredentials(username, password);
  // if (credentialsResponse.ok) {
  //   router.toMain();
  // } else {
  //   console.log(credentialsResponse.statusText);
  //   router.toError();
  // }
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
