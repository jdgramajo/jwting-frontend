const postCredentials = async (event) => {
  event.preventDefault();

  const url = "https://jwting.herokuapp.com:443/auth/signin";
  const init = {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      username: document.getElementById("username-group-input").value,
      password: document.getElementById("password-group-input").value,
    }),
    headers: {
      Accept: "*/*",
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const response = await fetch(url, init);

  return response;
};
