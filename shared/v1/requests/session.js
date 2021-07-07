const backendRootURL = "http://localhost:8080";

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

  try {
    const response = await fetch(url, init);
    if (!response.ok) return response;
    const myRolesResponse = await fetch(`${backendRootURL}/myRoles`, {
      credentials: "include",
    });
    const myRolesJSON = await myRolesResponse.json();
    return myRolesJSON;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// Used from a form, needs to prevent default event.
const login = (event) => {
  event.preventDefault();

  const username = document.getElementById("username-group-input").value;
  const password = document.getElementById("password-group-input").value;

  postCredentials(username, password);
};
