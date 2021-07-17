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

  try {
    const response = await fetch(url, init);
    return response;
  } catch (err) {
    console.log(err);
  }
};

// Used from a form, needs to prevent default event.
const login = async (event) => {
  event.preventDefault();

  const username = document.getElementById("username-group-input").value;
  const password = document.getElementById("password-group-input").value;

  const credentialsResponse = await postCredentials(username, password);
  if (credentialsResponse.ok) {
    router.toMain();
  } else {
    console.log(credentialsResponse.statusText);
    router.toError();
  }
};
